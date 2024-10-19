const { Sequelize, DataTypes, sequelize, Op } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const User = require('./UserModel');
const Level = require('./LevelModel');
const Role = require('./RoleModel');
const Battle = require('./BattleModel');
const Clan = require('./ClanModel');
const Character = require('./CharacterModel');
const Chapter = require('./ChapterModel'); // Assurez-vous que ce modèle est correctement défini
const Comments = require('./CommentModel');
const ExistingCharacter = require('./ExistingCharacterModel');
const Fiction = require('./FictionModel');
const Game = require('./GameModel');
const Grade = require('./GradeModel'); // Correction de l'importation
const Illustration = require('./IllustrationModel');
const Image = require('./ImageModel');
const Location = require('./LocationModel');
const OriginalCharacter = require('./OriginalCharacterModel');
const OtherAnimal = require('./OtherAnimalModel');
const Permission = require('./PermissionModel');
const TypeRelation = require('./TypeRelationModel');
const TypeGame = require('./TypeGameModel');
const Warrior = require('./WarriorModel');
const RolePermission = require('./RolePermission')
const RelationCharacters = require('./RelationCharacters')
const UserCharacter = require('./UserCharacter')
const UserGame = require('./UserGame')
const GameCharacter = require('./GameCharacter')
const FictionIllustration = require('./FictionIllustration')
const ChapterIllustration = require('./ChapterIllustration')
const ChapterLocation = require('./ChapterLocation')
const FictionLocation = require('./FictionLocation')
const CharacterImage = require('./CharacterImage')
const Points = require ('./PointsModel')
const Quest = require ('./QuestModel')
const UserQuest = require('./UserQuestModel')
const Notification = require('./NotificationModel')
const Event = require('./EventModel')
const UserEvent = require('./UserEventModel')
const Prey = require('./PreyModel')
const Ennemy = require('./EnnemyModel')
const Rating = require('./RatingModel')
const QuestImage = require('./QuestImage')
const Landscape = require('./Landscape')
const Background = require('./BackgroundModel')
const Parallax = require('./ParallaxModel')
const QuestParallax = require('./QuestParallaxModel')
const Faq = require('./FaqModel')
const Message = require('./MessageModel')
const Gamer = require('./GamerModel')
const Arc = require('./ArcModel')
const Book = require('./BookModel')
const Chronology = require('./ChronologyModel')
const BookCharacter = require('./BookCharacterModel')
const QuestQuestionModel = require('./QuestQuestionModel')
const QuestionOptionModel = require('./QuestionOptionModel')
const KeyObject = require('./KeyObjectModel')
const QuestKeyObject = require('./QuestKeyObjectModel')
const GameGamer = require('./GameGamerModel')


// Exporter les modèles
const models = {
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
  CharacterImage,
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
  Sequelize,
  BookCharacter,
  QuestionOptionModel,
  QuestQuestionModel,
  KeyObject,
  QuestKeyObject,
  GameGamer,
  sequelize: connection,
  Utils: {
    Op,
    sequelize,
  },
};

module.exports = models;