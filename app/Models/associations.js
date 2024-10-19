const {
  User,
  Level,
  Role,
  Battle,
  Clan,
  Character,
  Chapter,
  Comments,
  ExistingCharacter,
  Fiction,
  Game,
  Illustration,
  Image,
  Location,
  OriginalCharacter,
  OtherAnimal,
  Permission,
  TypeRelation,
  TypeGame,
  Warrior,
  RelationCharacters,
  UserCharacter,
  GameCharacter,
  FictionIllustration,
  ChapterIllustration,
  RolePermission,
  CharacterImage,
  FictionLocation,
  ChapterLocation,
  Grade,
  Points,
  Quest,
  UserQuest,
  Notification,
  Event,
  UserEvent,
  Prey,
  Ennemy,
  UserGame,
  Rating,
  QuestImage,
  Landscape,
  Background,
  Parallax,
  QuestParallax,
  Faq,
  Message,
  Gamer,
  Arc,
  Book,
  Chronology,
  BookCharacter,
  QuestionOptionModel,
  QuestQuestionModel,
  KeyObject,
  QuestKeyObject,
  GameGamer,
  Sequelize,
  sequelize: connection,
  Utils: {
    Op,
    sequelize,
  },
} = require('./index');
const { hasMany } = require('./UserModel');

// Définir les associations ici
RolePermission.belongsTo(Role, { foreignKey: "Id" });
Role.hasMany(RolePermission);

RolePermission.belongsTo(Permission, { foreignKey: "Id" });
Permission.hasMany(RolePermission);

// USER

User.belongsTo(Level);
Level.hasMany(User);

User.belongsTo(Role, { foreignKey: "RoleId" });
Role.hasMany(User);

User.hasMany(Points, { foreignKey: 'UserId' });
Points.belongsTo(User, { foreignKey: 'UserId' });

User.hasMany(Notification, { foreignKey: 'UserId' });
Notification.belongsTo(User, { foreignKey: 'UserId' });

// Correct associations
User.hasMany(Message, { foreignKey: 'SenderId' }); // Un utilisateur peut envoyer plusieurs messages
Message.belongsTo(User, { foreignKey: 'SenderId', as: 'Sender' }); // Un message appartient à un utilisateur qui l'a envoyé

User.hasMany(Message, { foreignKey: 'ReceiverId' }); // Un utilisateur peut recevoir plusieurs messages
Message.belongsTo(User, { foreignKey: 'ReceiverId', as: 'Receiver' }); // Un message appartient à un utilisateur qui le reçoit


Gamer.belongsTo(User, {foreignKey: "UserId"})
User.hasMany(Gamer)


// Gamer.belongsTo(Clan, { foreignKey: 'ClanId' })
// Clan.hasMany(Game)

// CHARACTER

Character.belongsTo(Grade, { foreignKey: "GradeId" });
Grade.hasMany(Character)

Character.belongsTo(Clan, { foreignKey: "ClanId" })
Clan.hasMany(Character);


Character.belongsTo(Warrior, { foreignKey: "WarriorId" })
Warrior.hasOne(Character, { foreignKey: "Id" });

Warrior.belongsTo(Clan, { foreignKey: "ClanId" });
Clan.hasMany(Warrior);

Location.belongsTo(Clan,{ foreignKey: "ClanId" });
Clan.hasMany(Location);



// GAME

Fiction.belongsTo(Game, { foreignKey: "GameId" })
Game.hasMany(Fiction)

Gamer.belongsTo(Clan, { foreignKey: 'ClanId'})
Clan.hasMany(Gamer)

Gamer.belongsTo(Grade, {foreignKey: 'GradeId'})
Grade.hasMany(Gamer)

//FICTION

Fiction.belongsTo(User, { foreignKey: "UserId" });
User.hasMany(Fiction);

Comments.belongsTo(Fiction, { foreignKey: 'FictionId' });
Fiction.hasMany(Comments);


//CHAPTER

Chapter.belongsTo(Fiction, { foreignKey: "FictionId" });
Fiction.hasMany(Chapter);

Chapter.belongsTo(Chapter, { foreignKey: "Id" });
Chapter.hasOne(Chapter, { foreignKey: { name: "NextChapterId" } });


//Comments

Comments.belongsTo(User, { foreignKey: "UserId" })
User.hasMany(Comments);


//OTHERS


Prey.belongsTo(OtherAnimal, { foreignKey: "Id" });
OtherAnimal.hasMany(Prey);

Ennemy.belongsTo(OtherAnimal, { foreignKey: "Id" });
OtherAnimal.hasMany(Ennemy);

Rating.belongsTo(Fiction, { foreignKey: 'FictionId' });
Fiction.hasMany(Rating);

Rating.belongsTo(User, { foreignKey: 'UserId' });
User.hasMany(Rating);

//ASSOCIATION

UserQuest.belongsTo(User, { foreignKey: 'UserId' })
User.hasMany(UserQuest)

UserQuest.belongsTo(Quest, { foreignKey: 'QuestId' })
Quest.hasMany(UserQuest)

QuestImage.belongsTo(Quest, { foreignKey: 'QuestId' })
Quest.hasMany(QuestImage)

QuestParallax.belongsTo(Quest, { foreignKey: 'QuestId' })
Quest.hasMany(QuestParallax)

QuestParallax.belongsTo(Parallax, { foreignKey: 'ParallaxId' })
Parallax.hasMany(QuestParallax)

UserEvent.belongsTo(User, { foreignKey: 'UserId' })
User.hasMany(UserEvent)

UserEvent.belongsTo(Event, { foreignKey: 'EventId' })
Event.hasMany(UserEvent)

UserGame.belongsTo(Game, { foreignKey: 'GameId' });
Game.hasMany(UserGame, { foreignKey: 'GameId' });

UserGame.belongsTo(User, { foreignKey: 'UserId' });
User.hasMany(UserGame, { foreignKey: 'UserId' });

UserCharacter.belongsTo(User, { foreignKey: "UserId" });
User.hasMany(UserCharacter);

UserCharacter.belongsTo(Character, { foreignKey: "CharacterId" });
Character.hasMany(UserCharacter);

GameCharacter.belongsTo(Game, { foreignKey: "GameId" });
Game.hasMany(GameCharacter);

GameCharacter.belongsTo(Character, { foreignKey: "CharacterId" });
Character.hasMany(GameCharacter);



ChapterIllustration.belongsTo(Chapter, { foreignKey: "ChapterId" });
Chapter.hasMany(ChapterIllustration);

ChapterIllustration.belongsTo(Illustration, { foreignKey: "IllustrationId" });
Chapter.hasMany(ChapterIllustration);

FictionLocation.belongsTo(Fiction, { foreignKey: "FictionId" });
Fiction.hasMany(FictionLocation);

FictionLocation.belongsTo(Location, { foreignKey: "LocationId" });
Location.hasMany(FictionLocation);

ChapterLocation.belongsTo(Chapter, { foreignKey: "ChapterId" });
Chapter.hasMany(ChapterLocation);

ChapterLocation.belongsTo(Location, { foreignKey: "LocationId" });
Location.hasMany(ChapterLocation);

CharacterImage.belongsTo(Character, { foreignKey: "CharacterId" })
Character.hasMany(CharacterImage)

CharacterImage.belongsTo(Image, { foreignKey: "ImageId" })
Image.hasMany(CharacterImage)

FictionIllustration.belongsTo(Fiction, { foreignKey: "FictionId" });
Fiction.hasMany(FictionIllustration);

FictionIllustration.belongsTo(Illustration, { foreignKey: "IllustrationId" });
Illustration.hasMany(FictionIllustration);

Book.belongsTo(Arc, { foreignKey: "ArcId" })
Arc.hasMany(Book)

Chronology.belongsTo(Character, { foreignKey: 'CharacterId' });
Character.hasMany(Chronology, { foreignKey: 'CharacterId' });

BookCharacter.belongsTo(Book, {foreignKey: 'BookId'})
Book.hasMany(BookCharacter)

BookCharacter.belongsTo(Character, { foreignKey: 'CharacterId' })
Character.hasMany(BookCharacter)

// Quest model
QuestQuestionModel.belongsTo(Quest, { foreignKey: 'QuestId' });
Quest.hasMany(QuestQuestionModel);

// QuestQuestion model
QuestionOptionModel.belongsTo(QuestQuestionModel, { foreignKey: 'QuestQuestionId' });
QuestQuestionModel.hasMany(QuestionOptionModel);


// Correct Answer association
// Correct Answer association
QuestQuestionModel.belongsTo(QuestionOptionModel, { 
  foreignKey: 'CorrectAnswerId', 
  as: 'CorrectAnswer' 
});

//ASSOCIATION KEYMODEL

QuestKeyObject.belongsTo(Quest, { foreignKey: 'QuestId'})
Quest.hasMany(QuestKeyObject)

QuestKeyObject.belongsTo(KeyObject, { foreignKey: 'KeyObjectId'})
KeyObject.hasMany(QuestKeyObject)

GameGamer.belongsTo(Game, {foreignKey: 'GameId'})
Game.hasMany(GameGamer)

GameGamer.belongsTo(Gamer, {foreignKey: 'GamerId'})
Gamer.hasMany(GameGamer)

/* RELATION CHARACTER */

// Character model
Character.hasMany(RelationCharacters, {
  foreignKey: "IdCharacterOne",
  as: "RelationsOne",
});
Character.hasMany(RelationCharacters, {
  foreignKey: "IdCharacterTwo",
  as: "RelationsTwo",
});

// RelationCharacters model associations
RelationCharacters.belongsTo(Character, {
  foreignKey: "IdCharacterOne",
  as: "CharacterOne",
});
RelationCharacters.belongsTo(Character, {
  foreignKey: "IdCharacterTwo",
  as: "CharacterTwo",
});
RelationCharacters.belongsTo(TypeRelation, {
  foreignKey: "TypeRelationId", // Spécifiez la clé étrangère si nécessaire
  as: "TypeRelation",
});



module.exports = {
  User,
  Level,
  Role,
  Battle,
  Clan,
  Character,
  Chapter,
  Comments,
  ExistingCharacter,
  Fiction,
  Game,
  Illustration,
  Image,
  Location,
  OriginalCharacter,
  OtherAnimal,
  Permission,
  TypeRelation,
  TypeGame,
  Warrior,
  RelationCharacters,
  UserCharacter,
  UserGame,
  GameCharacter,
  FictionIllustration,
  ChapterIllustration,
  RolePermission,
  FictionLocation,
  ChapterLocation,
  Grade,
  CharacterImage,
  Points,
  Quest,
  UserQuest,
  Notification,
  Event,
  UserEvent,
  Prey,
  Ennemy,
  Rating,
  Landscape,
  Background,  
  Parallax,
  QuestParallax,
  Faq,
  Arc,
  Book,
  Chronology,
  BookCharacter,
  QuestionOptionModel,
  QuestQuestionModel,
  KeyObject,
  QuestKeyObject,
  GameGamer,
  Sequelize,
  sequelize: connection,
  Utils: {
    Op,
    sequelize,
  },
}