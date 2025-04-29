import { useState, useEffect } from 'react';
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, 
  IonLabel, IonModal, IonFooter, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, 
  IonCardTitle, IonAlert, IonText, IonAvatar, IonCol, IonGrid, IonRow, IonIcon, IonPopover 
} from '@ionic/react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../utils/supabaseClients';
import { pencil } from 'ionicons/icons';

interface Post {
  post_id: string;
  user_id: number;
  username: string;
  avatar_url: string;
  post_content: string;
  post_created_at: string;
  post_updated_at: string;
}

const FeedContainer = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postContent, setPostContent] = useState('');
  const [user, setUser] = useState<User | null>(null); // Supabase auth user
  const [dbUser, setDbUser] = useState<{ user_id: number, username: string, user_avatar_url: string } | null>(null); // Your users table info
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [popoverState, setPopoverState] = useState<{ open: boolean; event: Event | null; postId: string | null }>({ open: false, event: null, postId: null });

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, []);

  const fetchUser = async () => {
    const { data: authData } = await supabase.auth.getUser();
    if (authData?.user?.email?.endsWith('@nbsc.edu.ph')) {
      setUser(authData.user);

      const { data: userData, error } = await supabase
        .from('users')
        .select('user_id, username, user_avatar_url')
        .eq('user_email', authData.user.email)
        .single();
        
      if (!error && userData) {
        setDbUser(userData);
      }
    }
  };

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('post_created_at', { ascending: false });
    
    if (!error) {
      setPosts(data as Post[]);
    } else {
      console.error('Fetch posts error:', error);
    }
  };

  const createPost = async () => {
    if (!postContent || !user || !dbUser) return;

    const avatarUrl = dbUser.user_avatar_url || 'https://ionicframework.com/docs/img/demos/avatar.svg';

    const { error } = await supabase
      .from('posts')
      .insert([
        { 
          post_content: postContent, 
          user_id: dbUser.user_id, 
          username: dbUser.username, 
          avatar_url: avatarUrl 
        }
      ]);

    if (!error) {
      setPostContent('');
      fetchPosts(); // Refresh posts after creating a new one
    } else {
      console.error('Post creation error:', error);
    }
  };

  const deletePost = async (post_id: string) => {
    await supabase.from('posts').delete().match({ post_id });
    fetchPosts(); // Refresh posts after delete
  };

  const startEditingPost = (post: Post) => {
    setEditingPost(post);
    setPostContent(post.post_content);
    setIsModalOpen(true);
  };

  const savePost = async () => {
    if (!postContent || !editingPost) return;
    const { error } = await supabase
      .from('posts')
      .update({ post_content: postContent })
      .match({ post_id: editingPost.post_id });
      
    if (!error) {
      fetchPosts(); // Refresh posts after editing
      setPostContent('');
      setEditingPost(null);
      setIsModalOpen(false);
      setIsAlertOpen(true);
    } else {
      console.error('Update post error:', error);
    }
  };

  return (
    <>
      <IonContent>
        {user ? (
          <>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Create Post</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonInput
                  value={postContent}
                  onIonChange={e => setPostContent(e.detail.value!)}
                  placeholder="Write a post..."
                />
              </IonCardContent>
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0.5rem' }}>
                <IonButton onClick={createPost}>Post</IonButton>
              </div>
            </IonCard>

            {posts.map(post => (
              <IonCard key={post.post_id} style={{ marginTop: '2rem' }}>
                <IonCardHeader>
                <IonRow style={{
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '8px',
  margin: '4px 0',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  borderLeft: '4px solid #4a6cf7'
}}>
  <IonCol size="1.85" style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px'
  }}>
    <IonAvatar style={{
      width: '48px',
      height: '48px',
      border: '2px solid #4a6cf7',
      boxShadow: '0 2px 4px rgba(74, 108, 247, 0.2)'
    }}>
      <img 
        alt={post.username} 
        src={post.avatar_url} 
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%'
        }}
      />
    </IonAvatar>
  </IonCol>
  
  <IonCol style={{
    padding: '8px 12px',
    background: 'linear-gradient(to right, rgba(185, 231, 110, 0.05), transparent)',
    borderRadius: '8px'
  }}>
    <IonCardTitle style={{ 
      marginTop: '0',
      color: '#2d3748',
      fontSize: '1rem',
      fontWeight: '600'
    }}>
      {post.username || 'Unknown User'}
    </IonCardTitle>
    <IonCardSubtitle style={{
      color: '#718096',
      fontSize: '0.8rem',
      marginTop: '2px'
    }}>
      {new Date(post.post_created_at).toLocaleString()}
    </IonCardSubtitle>
  </IonCol>
  
  <IonCol size="auto" style={{
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px'
  }}>
    <IonButton
      fill="clear"
      onClick={(e) => setPopoverState({
        open: true,
        event: e.nativeEvent,
        postId: post.post_id,
      })}
      style={{
        '--background': 'rgba(74, 108, 247, 0.1)',
        '--background-hover': 'rgba(74, 108, 247, 0.2)',
        '--background-activated': 'rgba(74, 108, 247, 0.3)',
        borderRadius: '50%',
        width: '36px',
        height: '36px'
      }}
    >
      <IonIcon 
        icon={pencil} 
        style={{
          color: '#4a6cf7',
          fontSize: '1.1rem'
        }} 
      />
    </IonButton>
  </IonCol>
</IonRow>
                </IonCardHeader>

                <IonCardContent>
                  <IonText style={{ color: 'black' }}>
                    <h1>{post.post_content}</h1>
                  </IonText>
                </IonCardContent>

                <IonPopover
                  isOpen={popoverState.open && popoverState.postId === post.post_id}
                  event={popoverState.event}
                  onDidDismiss={() =>
                    setPopoverState({ open: false, event: null, postId: null })
                  }
                >
                  <IonButton
                    fill="clear"
                    onClick={() => {
                      startEditingPost(post);
                      setPopoverState({ open: false, event: null, postId: null });
                    }}
                  >
                    Edit
                  </IonButton>
                  <IonButton
                    fill="clear"
                    color="danger"
                    onClick={() => {
                      deletePost(post.post_id);
                      setPopoverState({ open: false, event: null, postId: null });
                    }}
                  >
                    Delete
                  </IonButton>
                </IonPopover>
              </IonCard>
            ))}
          </>
        ) : (
          <IonLabel>Loading...</IonLabel>
        )}
      </IonContent>

      {/* Modal for editing post */}
      <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Edit Post</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonInput
            value={postContent}
            onIonChange={e => setPostContent(e.detail.value!)}
            placeholder="Edit your post..."
          />
        </IonContent>
        <IonFooter style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
          <IonButton onClick={savePost}>Save</IonButton>
          <IonButton color="medium" onClick={() => setIsModalOpen(false)}>Cancel</IonButton>
        </IonFooter>
      </IonModal>

      {/* Alert after successful edit */}
      <IonAlert
        isOpen={isAlertOpen}
        onDidDismiss={() => setIsAlertOpen(false)}
        header="Success"
        message="Post updated successfully!"
        buttons={['OK']}
      />
    </>
  );
};

export default FeedContainer;
