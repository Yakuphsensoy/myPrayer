import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {

    const navigate = useNavigate();
    return (
        <div className="header">
            <ul className='headerTexts'>
                <li onClick={() => navigate("/")}>Namaz Vakitleri</li>
                <li onClick={() => navigate("/NamesOfAllah")}>Allahın İsimleri</li>
                <li onClick={() => window.open("https://webdosya.diyanet.gov.tr/kuran/kuranikerim/dosyalar/document/kuran.pdf")}>Kur'an-ı Kerim</li>
                <li onClick={() => navigate("/Dhikr")}>Zikirmatik</li>
            </ul>
        </div>
    );
}