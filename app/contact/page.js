'use client';

import React, { useState, useEffect } from 'react';
import styles from './ContactUs.module.css'; // ตรวจสอบให้แน่ใจว่าเส้นทางไฟล์ CSS ถูกต้อง

const ContactUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.leftPanel}>
                <h1 className={styles.title}>Contact information</h1>
                <p className={styles.text}>
                    ...
                </p>
                <div className={styles.contactInfo}>
                    <p>📞 0123456789</p>
                    <p>✉️ simple@mail.com</p>
                </div>
            </div>
            <div className={styles.rightPanel}>
                <h2 className={styles.title}>Contact Us</h2>
                <form className={styles.form}>
                    <input type="text" placeholder="Name" className={styles.input} required />
                    <input type="text" placeholder="Contact topic" className={styles.input} required />
                    <textarea placeholder="Please specify message" className={styles.textarea} required></textarea>
                    <button type="submit" className={styles.button}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
