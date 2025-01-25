// lib/blowfish.js
import CryptoJS from 'crypto-js';
import { toast } from 'sonner';
import Blowfish from './blowfish'

const key = process.env.NEXT_PUBLIC_BLOWFISH_KEY;

if (!key || key.length < 8) {
  throw new Error('Encryption key must be at least 8 characters long and set in environment variables');
}

// Blowfish encryption function
export const encrypt = (text) => {
  return CryptoJS.Blowfish.encrypt(text, key).toString();
};

// Blowfish decryption function
export const decrypt = (ciphertext) => {
  try {
    const bytes = CryptoJS.Blowfish.decrypt(ciphertext, key);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedText) {
      throw new Error('Decryption failed');
    }
    return decryptedText;
  } catch (error) {

    toast.error('Invalid encrypted text or decryption key');
    console.log(error)
  }
};
