import React, { useState } from 'react';
import axios from 'axios';

function OrderForm() {
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [toppings, setToppings] = useState([]);
    const [notes, setNotes] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleToppingChange = (event) => {
        const value = event.target.value;
        setToppings(prev => 
            prev.includes(value) ? prev.filter(topping => topping !== value) : [...prev, value]
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (name.length < 3 || !size || toppings.length === 0) {
            setError('Lütfen tüm alanları doldurun.');
            return;
        }

        setIsSubmitting(true);
        setError('');

        const orderData = {
            isim: name,
            boyut: size,
            malzemeler: toppings,
            özel: notes
        };

        try {
            const response = await axios.post('https://reqres.in/api/pizza', orderData);
            console.log('Sipariş Özeti:', response.data);
            
        } catch (err) {
            console.error('Sipariş gönderiminde hata:', err);
            setError('Sipariş gönderilirken bir hata oluştu.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Pizza Siparişi</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>İsim:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Pizza Boyutu:</label>
                <div>
                    <label>
                        <input 
                            type="radio" 
                            value="Küçük" 
                            checked={size === 'Küçük'} 
                            onChange={(e) => setSize(e.target.value)} 
                        />
                        Küçük
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="Orta" 
                            checked={size === 'Orta'} 
                            onChange={(e) => setSize(e.target.value)} 
                        />
                        Orta
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="Büyük" 
                            checked={size === 'Büyük'} 
                            onChange={(e) => setSize(e.target.value)} 
                        />
                        Büyük
                    </label>
                </div>
            </div>
            <div>
                <label>Malzemeler:</label>
                {['Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Bacon', 'Cheese', 'Olives', 'Green Peppers', 'Pineapple', 'Spinach'].map(topping => (
                    <label key={topping}>
                        <input 
                            type="checkbox" 
                            value={topping} 
                            checked={toppings.includes(topping)} 
                            onChange={handleToppingChange} 
                        />
                        {topping}
                    </label>
                ))}
            </div>
            <div>
                <label>Notlar:</label>
                <textarea 
                    value={notes} 
                    onChange={(e) => setNotes(e.target.value)} 
                />
            </div>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Gönderiliyor...' : 'Sipariş Ver'}
            </button>
        </form>
    );
}

export default OrderForm;