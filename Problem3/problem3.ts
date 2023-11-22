// Problem 3 - Let's have some snack
function jajanBoba(uang: number, callback: (uang: number) => void) {
    const hargaBoba = 5000;
    if (uang >= hargaBoba) {
      setTimeout(() => {
        const sisaUang = uang - hargaBoba;
        console.log(`kamu jajan boba dengan harga Rp. ${hargaBoba} sisa uang kamu Rp. ${sisaUang}`);
        callback(sisaUang); // Memanggil callback dengan sisa uang untuk membeli seblak
      }, 5000); // Estimated time to get boba: 5 seconds
    } else {
      console.log(`Maaf uang kamu belum cukup untuk membeli boba. Sisa uang kamu sebesar Rp. ${uang}`);
    }
  }
  
  function jajanSeblak(uang: number) {
    const hargaSeblak = 8000;
    if (uang >= hargaSeblak) {
      setTimeout(() => {
        const sisaUang = uang - hargaSeblak;
        console.log(`kamu jajan seblak dengan harga Rp. ${hargaSeblak} sisa uang kamu Rp. ${sisaUang}`);
      }, 9000); // Estimated time to get seblak: 9 seconds
    } else {
      console.log(`Maaf uang kamu belum cukup untuk membeli seblak. Sisa uang kamu sebesar Rp. ${uang}`);
    }
  }
  
  jajanBoba(20000, jajanSeblak); // Output: kamu jajan boba dengan harga Rp. 5000 sisa uang kamu Rp. 15000
  jajanBoba(10000, jajanSeblak); // Output: kamu jajan boba dengan harga Rp. 5000 sisa uang kamu Rp. 5000
  