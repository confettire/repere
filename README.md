# Repère

**A simple clock and daily reminder app for people who need a little extra help staying oriented.**

---

## 🇫🇷 Français

### C'est quoi ?

Repère est une application web simple qui s'ouvre dans Safari. Elle affiche :
- L'heure et la date en grand
- Les événements du jour, synchronisés depuis Google Calendar
- Des rappels locaux (médicaments, repas, etc.)
- Des couleurs qui changent selon l'heure du jour (matin, après-midi, soir, nuit)

Pas d'installation. Pas de compte. On ouvre le lien, c'est tout.

### Comment l'utiliser ?

1. Ouvrez ce lien dans Safari sur l'iPad : **https://repere-liard.vercel.app**
2. Ajoutez-le à l'écran d'accueil (bouton Partager → "Sur l'écran d'accueil")
3. L'app fonctionne directement avec des rappels de base

### Connecter Google Calendar (optionnel)

Pour afficher les événements d'un calendrier Google :

1. Dans Google Calendar sur ordinateur → ⚙️ Paramètres → cliquez sur le calendrier
2. Descendez jusqu'à **"Integrate calendar"** → copiez l'**URL iCal publique**
3. Dans l'app, appuyez sur 🔒 en bas à droite → entrez le code PIN (par défaut : **1234**) → collez l'URL → Connecter

> ⚠️ Le calendrier doit être mis en **public** pour que la sync fonctionne.

### Mode soignant (PIN)

L'app s'ouvre en mode lecture seule. Pour modifier les rappels ou connecter un calendrier :
- Appuyez sur 🔒 en bas à droite
- Entrez le code PIN (par défaut : **1234**)
- Changez le code depuis le mode soignant

### Rappels locaux

Vous pouvez ajouter des rappels directement dans l'app (médicaments, repas, etc.). Ils sont sauvegardés sur l'iPad et ne nécessitent pas de connexion internet.

---

## 🇬🇧 English

### What is it?

Repère ("landmark" in French) is a simple web app that opens in Safari. It displays:
- Large clock and date
- Today's events, synced from Google Calendar
- Local reminders (medication, meals, etc.)
- Background colors that shift with the time of day (morning, afternoon, evening, night)

No installation. No account. Just open the link.

### How to use it?

1. Open this link in Safari on the iPad: **https://repere-liard.vercel.app**
2. Add it to the home screen (Share button → "Add to Home Screen")
3. The app works immediately with default reminders

### Connect Google Calendar (optional)

To display events from a Google Calendar:

1. In Google Calendar on desktop → ⚙️ Settings → click the calendar name
2. Scroll to **"Integrate calendar"** → copy the **public iCal URL**
3. In the app, tap 🔒 bottom right → enter PIN (default: **1234**) → paste the URL → Connect

> ⚠️ The calendar must be set to **public** for sync to work.

### Caregiver mode (PIN lock)

The app opens in read-only mode by default. To edit reminders or connect a calendar:
- Tap 🔒 bottom right
- Enter the PIN (default: **1234**)
- Change the PIN from inside caregiver mode

### Local reminders

You can add reminders directly in the app (medication, meals, etc.). They are saved on the device and work without an internet connection.

---

## Tech stack

- Pure HTML/CSS/JS — no framework
- Hosted on [Vercel](https://vercel.com)
- Google Calendar sync via a lightweight iCal proxy (`/api/proxy.js`)
- Compatible with iOS 9.3.5 (old iPads)

---

*Made with ❤️ for family.*
