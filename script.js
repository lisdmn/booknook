console.log("javascript marche"); 

function buttonTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
}

let books = ["Le journal d'un fou - Lu Xun","La métamorphose - Franz Kafka","Heidi - Johanna Spyri","Papa longues jambes - Jean Webster","La Perle - John Steinbeck","Le Vent dans les Saules - Kenneth Grahame","La Ferme des Animaux - George Orwell","Le père Goriot - Honoré de Balzac","Lettres de mon moulin - Alphonse Daudet","Le chien des Baskerville - Arthur Conan Doyle","La machine à explorer le temps - H. G. Wells","La Faim - Knut Hamsun","L'étranger - Albert Camus","Autour de la lune - Jules Verne","Le Passage - Louis Sachar","Anne... la maison aux pignons verts - Lucy Maud Montgomery","Au cœur des ténèbres - Joseph Conrad","Les Souffrances du jeune Werther - Johann Wolfgang von Goethe","L'Île du docteur Moreau - H. G. Wells","Journal d'un homme sans importance - George and Weedon Grossmith","Saison de la migration vers le nord - Tayeb Salih","La Conquête du courage - Stephen Crane","L'Éveil - Kate Chopin","Farenheit 451 - Ray Bradbury","Gatsby le Magnifique - F. Scott Fitzgerald","Herland - Charlotte Perkins Gilman","Le Grand Sommeil - Raymond Chandler","Le Portrait de Dorian Gray - Oscar Wilde","Jaune de Crome - Aldous Huxley","Thérèse Raquin - Emile Zola","Tout s'effondre -  Chinua Achebe","Trois hommes dans un bateau - Jerome K. Jerome","L'enfer - Henri Barbusse","L'Alchimiste - hill Coelho","La Guerre des Mondes -  H. G. Wells","Tess d'Urberville - Thomas Hardy","Dracula - Bram Stoker","Le Bon Soldat - Ford Maddox Ford","À l'Ouest, rien de nouveau - Erich Maria Remarque","Bel-ami - Guy de Maupassant","Au bohneur des dames - Emile Zola","Avec vue sur l’Arno - E. M Forster","La ferme de cousine Judith - Stella Gibbons","L'assomoir - Emile Zola","Mrs Dalloway - Virginia Woolf","Maison Hantée - Shirley Jackson","Le Tour du Monde en 80 Jours - Jules Verne","Le Jour des Triffides - John Wyndham","La Promenade au phare - Virginia Woolf","Tandis que j'agonise - William Faulkner","Mon Ántonia - Willa Cather","La Couleur pourpre - Alice Walker","Vingt Mille Lieues sous les mers  - Jules Verne","Le Meilleur des mondes - Aldous Huxley","Le Procès - Franz Kafka","Le journal de Bridget Jones - Helen Fielding","Le Bruit et la Fureur  - William Faulkner","Les Mines du roi Salomon - H. Rider Haggard","La Locataire de Wildfell Hall  - Anne Brontë","Dans les coulisses du musée - Kate Atkinson","Le Château de Cassandra - Dodie Smith","Howards End - E. M Forster","Du côté de chez Swann - Marcel Proust","Tarzan, seigneur de la jungle - Edgar Rice Burroughs","Le Chant de Salomon - Toni Morrison","Le testament - Nevil Shute","L'Insoutenable Légèreté de l'être - Milan Kundera","Mémoires d'Hadrien - Marguerite Yourcenar","Les 39 Marches  - John Buchan","1984 - George Orwell","Portrait de femme - Henry James","L'Énorme Chambrée - E. E Cummings","Le Maître et Marguerite - Mikhail Bulgakov","Route des Indes - E. M. Forster","Sur la route - Jack Kerouac","La Mère - Maxim Gorky","Vol au‑dessus d'un nid de coucou - Ken Kesey","Orgueil et Préjugés - Jane Austen","Retour à Brideshead - Evelyn Waugh","Madame Bovary - Gustave Flaubert","Trainspotting - Irvine Welsh","L'Aveuglement - José Saramango","Beloved - Toni Morrison","Ne tirez pas sur l'oiseau moqueur - Harper Lee","Robinson Crusoé - Daniel Defoe","Les Âmes mortes - Nikolai Gogol","Le Dieu des Petits Riens - Arundhati Roy","Expiation - Ian McEwan","De bons présages - Neil Gaiman et Terry Pratchett","Alexis Zorba - Nikos Kazantzakis","Voyage au bout de la nuit - Louis-Ferdinand Céline","Heurs et malheurs de la fameuse Moll Flanders - Daniel Defoe","Les Hauts de Hurlevent  - Emily Brontë","Cent ans de solitude - Gabriel Garcia Marquez","Le Dernier des Mohicans - James Fenimore Cooper","Les Quatre Filles du docteur March  - Louisa May Alcott","L'éducation Sentimentale  - Gustave Flaubert","Ainsi va toute chair - Samuel Butler","Rebecca - Daphne du Maurier","L'Amour aux temps du choléra  - Gabriel Garcia Marquez","Emma - Jane Austen","Le Tambour - Günter Grass","Sister Carrie - Theodore Dreiser","Amants et Fils - D. H. Lawrence","Nostromo - Joseph Conrad","Jude l'Obscur - Thomas Hardy","Nord et Sud - Elizabeth Gaskell","Homme invisible, pour qui chantes-tu ?  - Ralph Ellison","Moby Dick - Herman Melville","Le Parrain  - Mario Puzo","La Femme en blanc  - Wilkie Collins","Kane et Abel - Jeffrey Archer","Les pêcheurs de coquillages - Rosamunde Pilcher","Les Grandes Espérances - Charles Dickens","La Pierre de lune - Wilkie Collins","Catch 22  - Joseph Heller","La Maison des feuilles - Mark Z. Danielwski","Jane Eyre - Charlotte Brontë","Les Raisins de la colère - John Steinbeck","Notre-Dame de Paris - Victor Hugo","Le Maître des illusions - Donna Tartt","Possession - A. S. Byatt","Crime et Châtiment - Fyodor Dostoyevsky","Les Frères Karamazov - Fyodor Dostoyevsky","Les Misérables - Victor Hugo","Les Enfants de minuit - Salman Rushdie","Les Trois Mousquetaires - Alexandre Dumas","The Magus - John Fowles","Le Carnet d'or - Doris Lessing","Ulysse - James Joyce","L'Idiot - Fyodor Dostoyevsky","Middlemarch - George Eliot","La Foire aux vanités - William Makepeace Thackeray","David Copperfield - Charles Dickens","Histoire de Tom Jones, enfant trouvé - Henry Fielding","La Maison d'Âpre-Vent - Charles Dickens","Don Quichotte - Miguel de Cervantes","Anna Karénine - Leo Tolstoy","Le Comte de Monte-Cristo - Alexandre Dumas","Autant en emporte le vent - Margaret Mitchell","Un garçon convenable - Vikram Seth"]

function emptyBooks() {
    console.log(books);
    books.length = 0;
    console.log(books);
}

function addBook() {
    let perso = document.getElementById("perso").value;
    console.log(perso);
    if (perso != "") {
        books.push(perso);
    }
}

function getBook() {
    let livreAuHasard = (books[Math.floor(Math.random() * books.length)]);
    console.log(livreAuHasard);
    let yo = document.getElementById('resultat');
    if (livreAuHasard === undefined) {
        yo.innerHTML = "Ajouter un livre";
    } else {
        yo.innerHTML = livreAuHasard;
        console.log(books.indexOf(livreAuHasard));
        books.splice(books.indexOf(livreAuHasard), 1);
    }
}

$(document).ready(function(){
    $(".worldimg").click(function(){
        $(".worldtxt").toggle();
      });
      $(".wellsimg").click(function(){
        $(".wellstxt").toggle();
      });
      $(".hillimg").click(function(){
        $(".hilltxt").toggle();
      });
      $(".tomimg").click(function(){
        $(".tomtxt").toggle();
      });
      $(".rlsimg").click(function(){
        $(".rlstxt").toggle();
      });
    });
