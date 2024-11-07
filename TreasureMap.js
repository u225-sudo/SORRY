const TreasureMap = {
  async getInitialClue() {
    return "Clue1";
  },
  async decodeAncientScript(clue) {
    return "Temple";
  },
  async findHiddenPassage() {
    return "Passage";
  },
  async searchTemple(location) {
    return "Box";
  },
  async openTreasureBox() {
    return "Treasure";
  },
  async useSpecialSkill() {
    return "Entrance";
  },

  async displayTreasureImage() {
    const treasureImage = document.getElementById('treasure-image');
    treasureImage.src = 'start/baozang.jpg'; // 替换为你的图片路径
    treasureImage.style.display = 'block';
    treasureImage.classList.add('open-box'); // 添加open-box类
  }
};

export default TreasureMap;
