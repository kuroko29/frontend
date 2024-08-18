import styles from './About.module.css';

export default function About() {
    return (
        
        <div className={styles.container}>
            <br /><br /><br />
            <div style={{ maxWidth: '2000px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start-lg' }}>
                
                <div className={styles.card}>
                    <div style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                        color: 'black', 
                        padding: '30px', 
                        fontSize: '2rem', 
                        fontWeight: 'bold', 
                        textAlign: 'center', 
                        marginBottom: '20px', 
                        width: '100%',
                    }}>
                        About additional information
                    </div>
                    <div style={{ padding: '20px' }}>
                        <h5 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Genshin Impact (Chinese: 原神 Yuánshén)</h5>
                        <p style={{ fontSize: '1rem', marginBottom: '20px' }}>
                            is an open world adventure game developed by HoYoverse outside of China. Genshin Impact is published by its subsidiary Cognosphere Pte Ltd. d/b/a HoYoverse. The game comes with a world full of fantasy and a battle system using magical powers from the elements, switching characters, and a gacha system for acquiring characters, weapons, and other resources. There is also a multiplayer mode for up to 4 players at the same time. Players will need to be connected to the internet while playing Genshin Impact. Genshin Impact launched worldwide on September 28, 2020 for PC, mobile (iOS/Android), and PlayStation 4. Genshin Impact launched for PlayStation 5 on November 11, 2020, with cross-save support for the platform. PlayStation 4 Genshin Impact later launched for PC via the Epic Games Store on June 9, 2021. Genshin Impact is also planned to release on Nintendo Switch.
                        </p>
                    </div>
                </div>
                
                <div className={styles.iframeWrapper}>
                    <iframe 
                        width="800"  // ขยายขนาดความกว้างของวิดีโอ
                        height="450" // ขยายขนาดความสูงของวิดีโอ
                        src="https://www.youtube.com/embed/nbCxicX8Wdo" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                
            </div>
        </div>
    );
}
