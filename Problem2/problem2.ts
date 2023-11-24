//
function dragonOfLoowater(dragonHead: number[], knightHeight: number[]): number | string {
  dragonHead.sort((a, b) => a - b); // Urutkan diameter kepala naga
  knightHeight.sort((a, b) => a - b); // Urutkan tinggi ksatria

  let totalHeight = 0;
  let headIdx = 0;

  for (const height of knightHeight) {
    if (headIdx === dragonHead.length) break; // Semua kepala naga telah dipotong

    if (height >= dragonHead[headIdx]) {
      totalHeight += height;
      headIdx++;
    }
  }

  return headIdx === dragonHead.length ? totalHeight : 'knight fall';
}

// Kasus Uji
console.log(dragonOfLoowater([5, 4], [7, 8, 4])); // 11
console.log(dragonOfLoowater([5, 10], [5])); // "knight fall"
console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // "knight fall"
console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); // 10
