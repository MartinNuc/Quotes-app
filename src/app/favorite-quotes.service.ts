import { Injectable } from '@angular/core';
import { Quote } from './quote';

export class FavoriteQuotesService {
  db: IDBDatabase;

  init(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const req = window.indexedDB.open('quotes', 1);
      req.onupgradeneeded = (event: any) => {
        this.db = event.target.result;
        const table = this.db.createObjectStore('favorite-quotes', { keyPath: 'ID' });
        table.createIndex('ID', 'ID');
        resolve();
      };
      req.onsuccess = (e: any) => {
        this.db = e.target.result;
        resolve();
      };
      req.onerror = (e: any) => reject(e);
    });
  }

  add(quote: Quote): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const transaction = this.db.transaction('favorite-quotes', 'readwrite');
      const table = transaction.objectStore('favorite-quotes');
      const req = table.add(quote);
      req.onsuccess = () => resolve();
      req.onerror = () => reject();
    });
  }

  unfavor(quote: Quote): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const transaction = this.db.transaction('favorite-quotes', 'readwrite');
      const table = transaction.objectStore('favorite-quotes');
      const req = table.delete(quote.ID);
      req.onsuccess = () => resolve();
      req.onerror = () => reject();
    });
  }

  isFavorite(quote: Quote) {
    return new Promise<boolean>((resolve, reject) => {
      const transaction = this.db.transaction('favorite-quotes', 'readonly');
      const table = transaction.objectStore('favorite-quotes');
      const req = table.get(quote.ID);
      req.onsuccess = (event: any) => resolve(event.target.result ? true : false);
      req.onerror = () => resolve(false);
    });
  }

  list(): Promise<Quote[]> {
    return new Promise<Quote[]>((resolve, reject) => {
      const transaction = this.db.transaction('favorite-quotes', 'readonly');
      const table = transaction.objectStore('favorite-quotes');
      const req = (table as any).getAll();
      req.onsuccess = (event: any) => resolve(event.target.result);
      req.onerror = () => reject();
    })
  }
}
