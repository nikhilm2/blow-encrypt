// Simplified Blowfish implementation
class Blowfish {
    constructor(key) {
      this.P = [...Array(18)].map(() => 0); // P-array
      this.S = [...Array(4)].map(() => [...Array(256)].map(() => 0)); // S-boxes
      this.key = key;
      this.init();
    }
  
    // S-box initialization (example)
    static SBOX = [
      0xd1310ba6, 0x98dfb5ac, 0x2ffd72db, 0xd01adfb7, // Truncated example
      0xb8e1afed, 0x6a267e96, 0xba7c9045, 0xf12c7f99,
    ];
  
    // P-array initialization (example)
    static PBOX = [
      0x243f6a88, 0x85a308d3, 0x13198a2e, 0x03707344, // Truncated example
      0xa4093822, 0x299f31d0, 0x082efa98, 0xec4e6c89,
    ];
  
    init() {
      this.P = Blowfish.PBOX.slice(); // Initialize P-array
      this.S = Blowfish.SBOX.slice(); // Initialize S-box
  
      let keyIndex = 0;
  
      // XOR the key with the P-array
      for (let i = 0; i < this.P.length; i++) {
        let keyPart = 0;
        for (let j = 0; j < 4; j++) {
          keyPart = (keyPart << 8) | this.key.charCodeAt(keyIndex % this.key.length);
          keyIndex++;
        }
        this.P[i] ^= keyPart;
      }
    }
  
    // Feistel function
    feistel(x) {
      const a = (x >>> 24) & 0xff;
      const b = (x >>> 16) & 0xff;
      const c = (x >>> 8) & 0xff;
      const d = x & 0xff;
  
      return (
        ((this.S[0][a] + this.S[1][b]) ^ this.S[2][c]) + this.S[3][d]
      );
    }
  
    // Encrypt a 64-bit block
    encryptBlock(block) {
      let [left, right] = block;
  
      for (let i = 0; i < 16; i++) {
        left ^= this.P[i];
        right ^= this.feistel(left);
        [left, right] = [right, left]; // Swap
      }
  
      [left, right] = [right, left]; // Unswap
      right ^= this.P[16];
      left ^= this.P[17];
  
      return [left, right];
    }
  
    // Decrypt a 64-bit block
    decryptBlock(block) {
      let [left, right] = block;
  
      for (let i = 17; i > 1; i--) {
        left ^= this.P[i];
        right ^= this.feistel(left);
        [left, right] = [right, left]; // Swap
      }
  
      [left, right] = [right, left]; // Unswap
      right ^= this.P[1];
      left ^= this.P[0];
  
      return [left, right];
    }
  }
  
  // Usage example
  const key = "my-secret-key";
  const blowfish = new Blowfish(key);
  
  const plaintextBlock = [0x12345678, 0x9abcdef0]; // Example 64-bit block
  const encrypted = blowfish.encryptBlock(plaintextBlock);
  const decrypted = blowfish.decryptBlock(encrypted);
  
  console.log("Plaintext Block:", plaintextBlock);
  console.log("Encrypted Block:", encrypted);
  console.log("Decrypted Block:", decrypted);
  