export class UserStats {
  steamID: string;
  gameName: string;
  stats: { name: string; value: number }[];
  achievements: { name: string; achieved: boolean }[];

  constructor(data: {
    playerstats: {
      steamID: string;
      gameName: string;
      stats: { name: string; value: number }[];
      achievements: { name: string; achieved: boolean }[];
    };
  }) {
    this.steamID = data.playerstats.steamID;
    this.gameName = data.playerstats.gameName;
    this.stats = data.playerstats.stats.map(
      (stat: { name: string; value: number }) => ({
        name: stat.name,
        value: stat.value,
      }),
    );
    this.achievements = data.playerstats.achievements.map(
      (achievement: { name: string; achieved: boolean }) => ({
        name: achievement.name,
        achieved: achievement.achieved,
      }),
    );
  }
}
