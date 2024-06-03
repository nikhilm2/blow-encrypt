"use client"
import React,{useState} from 'react';
import {  encrypt, decrypt  } from './crypto.js'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input.jsx';
const Dashboard = () => {
    const [input, setInput] = useState('');
    const [encrypted, setEncrypted] = useState('');
    const [decrypted, setDecrypted] = useState('');
    const [error, setError] = useState('');
  
    const handleEncrypt = () => {
      try {
        setError('');
        const encryptedText = encrypt(input);
        setEncrypted(encryptedText);
        setDecrypted('');
      } catch (err) {
        setError(err.message);
      }
    };
  
    const handleDecrypt = () => {
      try {
        setError('');
       
        const decryptedText = decrypt(input);
        setDecrypted(decryptedText);
      } catch (err) {
        setError(err.message);
      }
    };
  

  return (
    <>
      <div className='flex gap-2 items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
      <h1 className='mt-20 text-purple-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl hover:bg-primary hover:opacity-90 transition-opacity'>Blowfish Encryption/Decryption</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='mt-4'>
        <Input
          type="text"
          placeholder="Enter text to encrypt"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: '300px', marginRight: '10px' }}
        />
      </div>
      <div className='mt-5'>
        <Button bg="primary" onClick={handleEncrypt} style={{ marginRight: '10px' }}>Encrypt</Button>
        <Button variant="destructive" onClick={handleDecrypt}>Decrypt</Button>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <h3>Encrypted Text:</h3>
        <p>{encrypted}</p>
      </div>
      <div>
        <h3>Decrypted Text:</h3>
        <p>{decrypted}</p>
      </div>
    </div>
        </div>
    </>
  )
}

export default Dashboard