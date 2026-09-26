# 📝 Exercices — Fonctions & Tableaux (sans solutions)

Consigne générale : à faire avec des boucles simples (`for`/`while`), sans utiliser les méthodes toutes faites du tableau concerné (`.length`, `.includes`, `.filter`, `.map`, `.sort`...) sauf indication contraire dans l'énoncé.

---

## 🔤 Partie 1 — Tableaux de chaînes de caractères

**Exercice 1.**
Écrire une fonction qui reçoit un tableau de mots et un mot `target`. La fonction parcourt le tableau et, si elle trouve le mot, renvoie **le nombre de caractères** de ce mot — **sans utiliser `.length`**.

**Exercice 2.**
Écrire une fonction "filter maison" qui reçoit un tableau de mots et une lettre. Elle renvoie un nouveau tableau contenant uniquement les mots qui **commencent** par cette lettre — sans utiliser `.filter()`.

**Exercice 3.**
Écrire une fonction qui reçoit un tableau de prénoms et renvoie **le prénom le plus court** du tableau — sans utiliser `.sort()` ni `Math.min()`.

**Exercice 4.**
Écrire une fonction qui reçoit un tableau de mots et une lettre. Elle doit compter **combien de fois** cette lettre apparaît dans **tout le tableau** (dans tous les mots additionnés). *(Boucle imbriquée obligatoire : une boucle sur les mots, une boucle sur les lettres de chaque mot.)*

**Exercice 5.**
Écrire une fonction qui reçoit un tableau de mots et renvoie un **nouveau tableau** où chaque mot est écrit **à l'envers** (par exemple `"Safi"` devient `"ifaS"`) — sans utiliser de méthode toute faite pour inverser une chaîne.

**Exercice 6.**
Écrire une fonction qui reçoit **deux tableaux** de mots et renvoie un tableau contenant uniquement les mots qui existent **dans les deux tableaux** (l'intersection). *(Boucle imbriquée obligatoire : une boucle sur le premier tableau, une boucle sur le deuxième.)*

---

## 🔢 Partie 2 — Tableaux de nombres

**Exercice 7.**
Écrire une fonction qui reçoit un tableau de nombres et un `target`. Elle renvoie `true` si le nombre existe dans le tableau, `false` sinon — sans utiliser `.includes()`.

**Exercice 8.**
Écrire une fonction qui reçoit **deux tableaux** de nombres et renvoie un tableau contenant les nombres présents **dans les deux tableaux**. *(Boucle imbriquée obligatoire.)*

**Exercice 9.**
Écrire une fonction qui reçoit un tableau de nombres et une valeur `cible`. Elle compte **combien de paires** de nombres (deux éléments différents du tableau) ont une somme égale à `cible`. *(Boucle imbriquée obligatoire : pour chaque nombre, comparer avec tous les nombres suivants.)*

**Exercice 10.**
Écrire une fonction "map maison" qui reçoit un tableau de nombres et un multiplicateur, et renvoie un nouveau tableau où chaque nombre est multiplié par ce multiplicateur — sans utiliser `.map()`.

**Exercice 11.**
Écrire une fonction qui reçoit un tableau de nombres et vérifie s'il contient des **doublons** (un même nombre présent plusieurs fois). Elle renvoie `true` ou `false`. *(Boucle imbriquée obligatoire : comparer chaque élément avec tous les autres.)*

**Exercice 12.**
Écrire une fonction qui trie un tableau de nombres par ordre **décroissant**, sans utiliser `.sort()`. *(Boucle imbriquée obligatoire — type tri à bulles.)*
