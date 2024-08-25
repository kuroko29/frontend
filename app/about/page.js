'use client';

import React, { useState, useEffect } from 'react';
import styles from './About.module.css'; // ตรวจสอบให้แน่ใจว่าเส้นทางไฟล์ CSS ถูกต้อง

const ContactUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.leftPanel}>
                <h1 className={styles.title}>Genshin Impact (Chinese: 原神 Yuánshén)</h1>
                <div className={styles.contactInfo}>
                    <p>is an open world adventure game developed by HoYoverse outside of China. Genshin Impact is published by its subsidiary Cognosphere Pte Ltd. d/b/a HoYoverse. The game comes with a world full of fantasy and a battle system using magical powers from the elements, switching characters, and a gacha system for acquiring characters, weapons, and other resources. There is also a multiplayer mode for up to 4 players at the same time. Players will need to be connected to the internet while playing Genshin Impact. Genshin Impact launched worldwide on September 28, 2020 for PC, mobile (iOS/Android), and PlayStation 4. Genshin Impact launched for PlayStation 5 on November 11, 2020, with cross-save support for the platform. PlayStation 4 Genshin Impact later launched for PC via the Epic Games Store on June 9, 2021. Genshin Impact is also planned to release on Nintendo Switch.</p>
                </div>
            </div>
            <div className={styles.rightPanel}>
                <h2 className={styles.title}>Game Trailer</h2>
                <div className={styles.videoContainer}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/nbCxicX8Wdo" 
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
