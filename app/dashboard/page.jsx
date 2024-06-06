"use client"
import React, { useState } from 'react';
import { encrypt, decrypt } from './crypto.js'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input.jsx';
import { toast } from 'sonner';
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(encrypted)
      .then(() => {
        toast('Text copied to clipboard');
      })
      .catch((err) => {
        toast('Could not copy text: ', err);
      });
  };



  return (
    <>
      <div className='flex gap-2 items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='mt-20 text-black text-4xl font-extrabold  sm:text-5xl'>Blowfish Encryption/Decryption</h1>
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
          <div className='flex items-center gap-2' style={{ marginBottom: '10px' }}>
            <h3>Encrypted Text:</h3>
            <p>{encrypted}</p>

            {encrypted && (
              <Button variant="ghost" onClick={copyToClipboard}>Copy</Button>
            )}
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