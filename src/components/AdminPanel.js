import React, { useState } from 'react';

const AdminPanel = ({ onAddProduct, products, onEditProduct, onDeleteProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !price || !image) {
      setError('All fields are required');
      return;
    }
    if (editId) {
      onEditProduct({ id: editId, name, price: parseFloat(price), image, description });
      setEditId(null);
    } else {
      onAddProduct({
        id: Date.now(),
        name,
        price: parseFloat(price),
        image,
        description
      });
    }
    setName('');
    setPrice('');
    setImage('');
    setDescription('');
    setError('');
  };

  const handleEdit = (product) => {
    setEditId(product.id);
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
    setDescription(product.description || '');
  };

  return (
    <div className="admin-panel" style={{maxWidth: 500, margin: '2rem auto', background: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px #0001'}}>
      <h2>{editId ? 'Edit Product' : 'Add New Product'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} style={{width: '100%', marginBottom: 8, padding: 8}} />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} style={{width: '100%', marginBottom: 8, padding: 8}} />
        <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} style={{width: '100%', marginBottom: 8, padding: 8}} />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} style={{width: '100%', marginBottom: 8, padding: 8}} rows={2} />
        {error && <div style={{color: 'red', marginBottom: 8}}>{error}</div>}
        <button type="submit" className="add-to-cart-btn" style={{width: '100%'}}>{editId ? 'Save Changes' : 'Add Product'}</button>
      </form>
      <h3 style={{marginTop: 32}}>Edit Existing Products</h3>
      <ul style={{padding: 0, listStyle: 'none'}}>
        {products.map(p => (
          <li key={p.id} style={{marginBottom: 8, background: '#f5f5f5', padding: 8, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <span>{p.name}</span>
            <div>
              <button onClick={() => handleEdit(p)} style={{padding: '2px 10px', marginRight: 8}}>Edit</button>
              <button onClick={() => onDeleteProduct(p.id)} style={{padding: '2px 10px', background: '#ff4444', color: '#fff', border: 'none', borderRadius: 4}}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
