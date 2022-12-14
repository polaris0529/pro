const Sequelize = require('sequelize');
 
class Comment extends Sequelize.Model {
   
   static init(sequelize) {
      return super.init(
         {
            comment: {
               type: Sequelize.STRING(100),
               allowNull: false,
            },
            created_at: {
               type: Sequelize.DATE,
               allowNull: true,
               defaultValue: Sequelize.NOW,
            },
         },
         {
            sequelize,
            timestamps: false,
            modelName: 'Comment',
            tableName: 'comments',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci'
         });
   }
 
   static associate(db) {
      db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id', onDelete: 'cascade', onUpdate: 'cascade'});
      // db.Comment (belongTo) db.User = N:1 관계 이다.
      // db.Comment는 속해있다. db.User에게
   }
};
 
module.exports = Comment;