# KSS Case Study — GitHub-এ আপলোডের সহজ নির্দেশনা

এই ZIP-টি সরাসরি GitHub-এ আপলোড করবেন **না**। আগে ZIP Extract/Unzip করুন।

## ১. Unzip করলে যা দেখবেন

```text
KSS_GitHub_Case_Study_CLEAN/
  README.md       (মূল প্রজেক্ট পরিচিতি)
  index.html      (ইন্টারঅ্যাকটিভ গ্যালারি)
  assets/         (গ্যালারি ডিজাইন, কভার, ওভারভিউ)
  screens/        (Android / Web / Super Admin / Hospital — ৩৪টি ছবি)
  prototypes/     (এডিট করা যায় এমন UI উদাহরণ)
  docs/           (স্ক্রিন তালিকা ও নির্দেশনা)
```

## ২. GitHub Repository-তে আপলোড

১. `https://github.com/ThisRobiul/kss-case-study` খুলুন।
২. `Code` → `Add file` → `Upload files` নির্বাচন করুন।
৩. Unzip করা `KSS_GitHub_Case_Study_CLEAN` ফোল্ডারের **ভেতরে যান**।
৪. `README.md`, `index.html` এবং **চারটি ফোল্ডার** একসঙ্গে GitHub Upload পেজে Drag & Drop করুন। শুধু `Choose your files` ব্যবহার করলে ফোল্ডার বাদ যেতে পারে; Drag & Drop ব্যবহার করুন।
৫. তালিকায় `screens/android/`, `screens/web/`, `screens/super-admin/`, `screens/hospital/` এবং `assets/`-এর ফাইল দেখা যাচ্ছে কি না যাচাই করুন।
৬. Commit message লিখুন `Organize KSS case study with structured gallery` এবং `Commit changes` চাপুন।

**গুরুত্বপূর্ণ:** GitHub-এ সরাসরি `KSS_GitHub_Case_Study_CLEAN` নামের বাইরের ফোল্ডার আপলোড করবেন না। Repo-এর প্রথম স্তরে `README.md` ও `index.html` থাকতে হবে।

## ৩. আগের ৬৩টি এলোমেলো ফাইল আগে আপলোড করে থাকলে

একই নামের পুরোনো Root ফাইলগুলো GitHub স্বয়ংক্রিয়ভাবে সরিয়ে দেবে না। তখন নতুন প্যাকেজের সব ফাইল Commit করার পর পুরোনো `android-*.jpg`, `web-*.jpg`, `hospital-*.jpg`, `super-admin-*.png`, পুরোনো gallery CSS/JS ইত্যাদি Root ফাইলগুলি আলাদাভাবে পরিষ্কার করতে হবে। **এখনই পুরোনো ফাইল ডিলিট করবেন না**, আগে নতুন README ও Gallery দেখে নিশ্চিত হোন।

## ৪. GitHub Pages চালু করা (গ্যালারির জন্য)

Repository → `Settings` → `Pages` → `Build and deployment`

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/(root)`
- `Save`

Publish সফল হলে ঠিকানা হবে: `https://thisrobiul.github.io/kss-case-study/`

## ৫. যাচাই

- GitHub Repository খুলে README-তে Cover এবং চারটি UI ছবি দেখুন।
- `screens/` ফোল্ডারের ৪টি বিভাগের মধ্যে মোট ৩৪টি ছবি আছে কি না দেখুন।
- GitHub Pages লিংকে Gallery খুলে Filter, Search, Light/Dark Mode এবং বড় করে ছবি দেখা পরীক্ষা করুন।
- Repository-তে UI prototype-গুলো কেবল demonstration; বাস্তব backend বা রোগীর তথ্য নেই।

সব ঠিক হলে GitHub Profile-এর `Customize your pins` থেকে `kss-case-study` Pin করুন।
