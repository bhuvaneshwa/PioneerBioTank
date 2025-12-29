# 🚀 Quick Start Guide - Pioneer BioTank Contact Forms

## ⚡ Fast Setup (5 Minutes)

### 1️⃣ Install Backend Dependencies

```powershell
cd backend
npm install
```

### 2️⃣ Setup Gmail App Password

1. Visit: https://myaccount.google.com/apppasswords
2. Enable 2FA if not already enabled
3. Create new App Password for "Mail"
4. Copy the 16-digit password (no spaces)

### 3️⃣ Create .env File

```powershell
copy .env.example .env
notepad .env
```

**Paste this and update with YOUR details:**

```env
PORT=3000
NODE_ENV=development

GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
RECIPIENT_EMAIL=where-to-receive@example.com
```

Save and close.

### 4️⃣ Start Backend Server

```powershell
npm start
```

You should see:
```
✅ Ready to receive form submissions!
```

### 5️⃣ Test the Forms

Open `index.html` or `Contact.html` in browser and test!

---

## ✅ What You Get

- ✅ **One shared JavaScript file** (`js/script.js`) handles both forms
- ✅ **Auto-detects** which page submitted the form
- ✅ **Single API endpoint** receives all submissions
- ✅ **Beautiful HTML emails** sent via Gmail
- ✅ **Field validation** and error handling
- ✅ **Success/error messages** for users

---

## 🎯 Form Fields Summary

### Contact Page
- Name* + Phone* (required)
- Email, Location, Property Type, Users, Message

### Home Page  
- Mobile* (required)
- Name, Location, Type, People, Preferred Contact

---

## 📁 Files Created

```
Pioneer_web/
├── js/script.js                    ← Shared form handler
├── Contact.html                    ← Updated (removed old script)
├── index.html                      ← Updated (removed old script)
├── backend/
│   ├── server.js                  ← Main API server
│   ├── package.json               ← Dependencies
│   ├── .env.example               ← Template
│   └── .env                       ← YOUR credentials (create this)
└── CONTACT_FORM_SETUP.md          ← Full documentation
```

---

## 🔧 Common Issues

### Backend won't start?
- Run `npm install` in backend folder
- Check `.env` file exists and has correct values

### No email received?
- Check spam folder
- Verify Gmail credentials
- Look at backend console for errors

### Form won't submit?
- Fill in required fields (marked with *)
- Check browser console (F12) for errors
- Make sure backend is running

---

## 📖 Full Documentation

See `CONTACT_FORM_SETUP.md` for:
- Detailed setup instructions
- Production deployment guide
- API documentation
- Customization options
- Troubleshooting

---

## 🎨 Customization

### Change API Endpoint (for production)

Edit `js/script.js` line 10:
```javascript
apiEndpoint: 'https://your-production-api.com/api/contact'
```

### Change Email Design

Edit `backend/server.js` → `formatEmailContent()` function

### Add New Form Fields

1. Add HTML input in form
2. Update email template in `server.js`
3. That's it! (script.js auto-captures new fields)

---

**Need help? Check CONTACT_FORM_SETUP.md for detailed docs! 📚**

