import { 
  IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
       
        <div>
         <IonCard>
          <img alt="Silhouette of mountains" src="https://i.ytimg.com/vi/INTe8o6EErU/maxresdefault.jpg" />
           <IonCardHeader>
           <IonCardTitle>music</IonCardTitle>
           <IonCardSubtitle>I LOVE LISTENING MUSIC</IonCardSubtitle>
         </IonCardHeader>

           <IonCardContent>I love music because it makes me feel happy and relaxed.
             When I’m sad, music helps me feel better. It’s always there when I need it.
                That’s why I love music.

         </IonCardContent>
         
       </IonCard>
    
  <div> 
    
    <IonCard>
          <img alt="Silhouette of mountains" src="https://tse4.mm.bing.net/th?id=OIP.utmDwQM05qDGPcqMZj5svAHaDn&pid=Api&P=0&h=180" />
           <IonCardHeader>
           <IonCardTitle>wattpad</IonCardTitle>
           <IonCardSubtitle>I LOVE READING WATTPAD STORIES</IonCardSubtitle>
         </IonCardHeader>

           <IonCardContent>I love reading Wattpad because it has many fun and exciting stories. I can read anytime and enjoy stories made by different people.

</IonCardContent>
  </IonCard>
  </div>
  </div>
        
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
         
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;