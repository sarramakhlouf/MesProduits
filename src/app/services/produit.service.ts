import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';


@Injectable({
providedIn: 'root'
})


export class ProduitService {
     produits : Produit[];
    
    constructor() {
      this.produits = [
              { idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000, dateCreation: new Date("01/7/2020")},
              { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 600, dateCreation : new Date("12/2/2024")},
              { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 500, dateCreation : new Date("02/12/2022")}
];
}

      listeProduits():Produit[] {return this.produits;}
      ajouterProduit( prod: Produit){
            this.produits.push(prod);
      }
      supprimerProduit( prod: Produit){
            
            const index = this.produits.indexOf(prod, 0);
            if (index > -1) {
            this.produits.splice(index, 1);
            }
      }
      consulterProduit(id:number): Produit{
           return this.produits.find(p => p.idProduit == id)!;
            
            }            
      updateProduit(p:Produit) {
                  //console.log(this.currentProduit);
                  this.supprimerProduit(p);
                  this.ajouterProduit(p);
                  this.trierProduits();
      }
      trierProduits(){
            this.produits = this.produits.sort((n1,n2) => {
                  if (n1.idProduit! > n2.idProduit!) {
                  return 1;
                  }
                  if (n1.idProduit! < n2.idProduit!) {
                  return -1;
                  }
                  return 0;
                  }); 
      }
            
}