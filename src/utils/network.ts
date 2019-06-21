import { QuoteType } from '../types';
import axios from 'axios';

export async function networkFetchQuotes(): Promise<QuoteType[]> {
  const response = await axios.get('http://localhost:8000/quotes');
  return response.data;
}

export async function networkPostQuote(text: string, author: string): Promise<QuoteType> {
  const response = await axios.post('http://localhost:8000/quotes/', {
    text,
    author,
  });
  return response.data;
}

export async function networkDeleteQuote(id: number): Promise<QuoteType> {
  const response = await axios.delete(`http://localhost:8000/quotes/${id}/`);
  return response.data;
}
