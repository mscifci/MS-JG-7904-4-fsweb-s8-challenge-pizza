import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OrderForm.css'; 
import logo from '../assets/logo.svg'; 

function OrderForm() {
    const navigate = useNavigate();
    const quantityInputRef = useRef(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nameError, setNameError] = useState('');
    const [selectedToppings, setSelectedToppings] = useState([]); 
    const [isSubmitting, setIsSubmitting] = useState(false); 

    const handleLogoClick = () => {
        navigate('/');
    }

    const handleIncrease = () => {
        const input = quantityInputRef.current;
        input.value = parseInt(input.value) + 1; 
    };

    const handleDecrease = () => {
        const input = quantityInputRef.current;
        if (input.value > 1) {
            input.value = parseInt(input.value) - 1; 
        }
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        validateName(e.target.value, lastName);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        validateName(firstName, e.target.value);
    };

    const validateName = (first, last) => {
        if (first.length < 3 || last.length < 3) {
            setNameError('Ad ve Soyad en az 3 karakter olmalıdır.');
        } else {
            setNameError('');
        }
    };

    const handleToppingChange = (topping) => {
        setSelectedToppings((prevSelected) => {
            if (prevSelected.includes(topping)) {
                
                return prevSelected.filter(item => item !== topping);
            } else {
                
                if (prevSelected.length < 10) {
                    return [...prevSelected, topping];
                }
                return prevSelected; 
            }
        });
    };

    const handleOrderSubmit = async (e) => {
        e.preventDefault(); 
    
        if (firstName.length < 3 || lastName.length < 3 || selectedToppings.length < 4) {
            return; 
        }
    
        setIsSubmitting(true); 
    
        
        await new Promise(resolve => setTimeout(resolve, 2000)); 
    
        setIsSubmitting(false); 
        navigate('/confirmation'); 
    };

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
                <form onSubmit={handleOrderSubmit}>
                    <div>
                        <h1>Position Absolute Acı Pizza</h1>
                        <div className="price-rating-container">
                            <p className="price">85.50₺</p>
                            <p className="rating">4.9</p>
                            <p className="likes">(200)</p>
                        </div>
                        <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
                    </div>

                    <div className="selection-container">
                        <div>
                            <h3>Boyut Seç</h3>
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

                        <div className="dough-selection">
                            <h3>Hamur Seç</h3>
                            <select>
                                <option>Hamur Kalınlığı</option>
                                <option>Glutensiz</option>
                                <option>Kalın</option>
                                <option>Peynir Kenarlı</option>
                                <option>Normal</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <h3>Ek Malzemeler</h3>
                        <p>En Fazla 10 malzeme seçebilirsiniz. En az 4 malzeme seçilmelidir.</p>
                        <div className="checkbox-container">
                            {['Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'].map(topping => (
                                <label key={topping}>
                                    <input 
                                        type="checkbox" 
                                        checked={selectedToppings.includes(topping)} 
                                        onChange={() => handleToppingChange(topping)} 
                                        disabled={selectedToppings.length >= 10 && !selectedToppings.includes(topping)}
                                    />
                                    {topping}
                                </label>
                            ))}
                        </div>
                        {selectedToppings.length < 4 && <p className="error-message">En az 4 malzeme seçmelisiniz.</p>}
                    </div>

                    <div>
                        <label>
                            <h2>Sipariş Notu:</h2>
                            <div className="textarea-container">
                                <textarea rows="4" placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
                            </div>
                        </label>
                    </div>

                    <div>
                        <h2>Ad ve Soyad:</h2>
                        <div className="name-inputs">
                            <label>
                                <input 
                                    type="text" 
                                    value={firstName} 
                                    onChange={handleFirstNameChange} 
                                    placeholder="Adınızı girin" 
                                />
                            </label>
                            <label>
                                <input 
                                    type="text" 
                                    value={lastName} 
                                    onChange={handleLastNameChange} 
                                    placeholder="Soyadınızı girin" 
                                />
                            </label>
                        </div>
                        {nameError && <p className="error-message">{nameError}</p>}
                    </div>

                    <div className="separator"></div>

                    <div className="summary-container">
                        <div className="quantity-container">
                            <label>
                                <button type="button" className="quantity-button" onClick={handleDecrease}>-</button>
                                <input type="number" min="1" defaultValue="1" className="quantity-input" ref={quantityInputRef} />
                                <button type="button" className="quantity-button" onClick={handleIncrease}>+</button>
                            </label>
                        </div>
                        <div className="order-summary">
                            <h2>Sipariş Toplamı</h2>
                            <div className="selections-container">
                                <p className="selections">Seçimler</p>
                                <p className="selections">25.00₺</p>
                            </div>
                            <div className="total-container">
                                <p className="total">Toplam</p>
                                <p className="total">110.50₺</p>
                            </div>
                            <button 
                                type="submit" 
                                className="order-form-button" 
                                disabled={isSubmitting || selectedToppings.length < 4 || firstName.length < 3 || lastName.length < 3}
                            >
                                {isSubmitting ? 'Gönderiliyor...' : 'SİPARİŞ VER'}
                            </button>
                        </div>
                       
                    </div>
                </form>
            </main>
        </div>
    );
}

export default OrderForm;