import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.svg'; 

function OrderForm() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <div>
            <header className="order-form-header">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="logo" 
                    onClick={handleLogoClick} 
                />
            </header>
            <nav className="order-form-nav">
                <span>Anasayfa</span> &gt; <span className="bold-text">Sipariş Oluştur</span>
            </nav>
        
            
            <main className="order-form-main">
                <div>
                    <h1>Position Absolute Acı Pizza</h1>
                    <div className="price-rating-container">
                        <p className="price">85.50₺</p>
                        <p className="rating">4.9</p>
                        <p className="likes">(200)</p>
                    </div>
                    <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>

                <div className="selection-container">
                <div>
                    <h3>Boyut Seç:</h3>
                    <div className="size-options">
                        <label>
                            <input type="radio" name="size" value="Küçük" />
                            Küçük
                        </label>
                        <label>
                            <input type="radio" name="size" value="Orta" />
                            Orta
                        </label>
                        <label>
                            <input type="radio" name="size" value="Büyük" />
                            Büyük
                        </label>
                     </div>
                </div>

                <div>
                    <h3>Hamur Seç:</h3>
                    <select>
                        <option>Normal</option>
                        <option>Glutensiz</option>
                        <option>Kalın</option>
                        <option>Peynir Kenarlı</option>
                        <option>Şefin Speysili</option>
                    </select>
                </div>
                </div>

                <div>
                    <h3>Ek Malzemeler</h3>
                    <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div className="checkbox-container">
                    <label><input type="checkbox" /> Pepperoni</label>
                    <label><input type="checkbox" /> Sosis</label>
                    <label><input type="checkbox" /> Kanada Jambonu</label>
                    <label><input type="checkbox" /> Tavuk Izgara</label>
                    <label><input type="checkbox" /> Soğan</label>
                    <label><input type="checkbox" /> Domates</label>
                    <label><input type="checkbox" /> Mısır</label>
                    <label><input type="checkbox" /> Sucuk</label>
                    <label><input type="checkbox" /> Jalepeno</label>
                    <label><input type="checkbox" /> Sarımsak</label>
                    <label><input type="checkbox" /> Biber</label>
                    <label><input type="checkbox" /> Sucuk</label>
                    <label><input type="checkbox" /> Ananas</label>
                    <label><input type="checkbox" /> Kabak</label>
                    </div>
                </div>

            
                <div>
                <label>
                    <h2>Sipariş Notu:</h2>
                    <div className="textarea-container">
                    <textarea rows="4" placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
                    </div>
                </label>

                </div>

                <div className="separator"></div>

               <div className="quantity-container">
                <label>
                <button className="quantity-button">-</button>
                </label>

               </div>

                <h2>Sipariş Toplamı</h2>
                <p>Seçimler: 50 TL</p>
                <p>Toplam: 250 TL</p>
                <button className="order-form-button">
                    SİPARİŞ VER
                </button>
            </main>
        </div>
    );
}

export default OrderForm;