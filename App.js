import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InputScreen from './screens/InputScreen';
import ShowScreen from './screens/ShowScreen';


export default function App() {

    return (
        <></>
    );
}


// Pour partir de zéro :
// 1. Créer une Bottom Tab Navigation qui permettra de naviguer entre InputScreen et ShowScreen. Vous pouvez customiser les icônes avec FontAwesome.
// 2. Dans InputScreen, créer un input et un boutton avec la mécanique d'états qui va vous permettre de stocker la valeur de l'input et de la traiter.
// 3. Initialisez votre store redux dans le fichier App.js, n'oubliez pas d'importer et d'ajouter les modules nécessaires au préalable.
// 4. Créez un dossier reducers qui contiendra un fichier messages.js, dans ce fichier créez et exportez deux actions : une qui va vous permettre de stocker les messages de l'input dans le store sous forme d'array (addMessages) et une autre qui va vous permettre de supprimer un messages de cet array (removeMessage).
// 5. Connectez vos composants via useDispatch et useSelector afin de pouvoir capter les messages écrits dans l'InputScreen et de les afficher sur le ShowScreen.
// 6. Ajoutez un bouton delete sur chacun de vos messages affichés dans ShowScreen qui va vous permettre via le reducer de le supprimer de la liste.
