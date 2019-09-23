import { Entry } from '../types/Entry';
import { Md5 } from 'ts-md5';
/*get all entries */
export function getAllEntries() {
  return getEntries('https://api.publicapis.org/entries');
}
/* get entries from category */
export function getEntriesFromCategory(category: string) {
  return getEntries('https://api.publicapis.org/entries?category=' + encodeURIComponent(category));
}
/*get entries */
function getEntries(url: string) {
 return fetch(url)
          .then((response) => response.json())
          .then((data) => {
            return data.entries.map((entry: Entry) => {
              entry.LinkHash = Md5.hashStr(entry.Link).toString();
              return entry;
            });
          });
 }
 /*get all categories*/
export function getCategories() {
   return fetch('https://api.publicapis.org/categories')
            .then((response) => response.json());
 }
 /*get entry */
export function getEntry(title: string, linkHash: string) {
  return fetch('https://api.publicapis.org/entries?title=' + encodeURIComponent(title))
          .then((response) => response.json())
          .then((data) => {
            return data.entries.map((entry: Entry) => {
              entry.LinkHash = Md5.hashStr(entry.Link).toString();
              return entry;
            }).filter((param: Entry) => param.LinkHash === linkHash);
          });
}
 /*get random entry */
export function getRandomEntry() {
  return fetch('https://api.publicapis.org/random')
          .then((response) => response.json())
          .then((data) => {
            return data.entries[0];
          });
 }
 /* relevant  */
export function relevantEntries(category: string, linkHash: string) {
  return getEntriesFromCategory(category)
          .then((data) => data.filter((item: Entry) => item.LinkHash !== linkHash).splice(0, 3));
 }
