import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setLoading(true);
  setError(null);

  try {
    // 🔍 Cek apakah email sudah pernah digunakan
    const q = query(
      collection(db, 'messages'),
      where('email', '==', formData.email)
    );
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      setError('Email ini sudah pernah digunakan untuk mengirim pesan.');
      setLoading(false);
      return;
    }

    // ✅ Kirim ke Formspree
    const response = await fetch('https://formspree.io/f/xvgrjvwq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `Pesan dari ${formData.name}`,
        _replyto: formData.email,
      }),
    });

    const result = await response.json();
    if (!result.ok) {
      throw new Error(result?.errors?.[0]?.message || 'Gagal kirim via Formspree');
    }

    // 🔥 Simpan ke Firestore
    await addDoc(collection(db, 'messages'), {
      ...formData,
      createdAt: new Date(),
    });

    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  } catch (error: any) {
    setError(error.message || 'Terjadi kesalahan');
  } finally {
    setLoading(false);
  }
}


  return {
    formData,
    success,
    error,
    loading,
    handleChange,
    handleSubmit,
  };
}
