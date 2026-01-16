import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = 'OrryGames_SecureKey_2026_v1_AES256';

export const encryptData = (data: any): string => {
  const jsonString = JSON.stringify(data);
  const encrypted = CryptoJS.AES.encrypt(jsonString, ENCRYPTION_KEY).toString();
  return encrypted;
};

export const decryptData = (encryptedData: string): any => {
  const decrypted = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
  const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
  return JSON.parse(jsonString);
};
