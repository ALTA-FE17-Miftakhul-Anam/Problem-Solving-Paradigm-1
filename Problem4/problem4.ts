// problem 4 - Lottery
function lottery(num: number): Promise<string> {
    return new Promise((resolve, reject) => {
      console.log('undian lotre dimulai...');
      console.log('sedang mengundi nomor anda...');
  
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        if (num === randomNumber) {
          resolve('Selamat anda mendapatkan hadiah utama berupa mobil');
        } else {
          reject('Maaf anda kurang beruntung');
        }
      }, 10000); // Waktu tunggu untuk undian: 10 detik
    });
  }
  
  lottery(5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log('undian lotre telah berakhir...'));
  