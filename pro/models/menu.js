const Sequelize = require('sequelize');
 
class Menu extends Sequelize.Model {
 
   // 스태틱 메소드
   // 테이블에 대한 설정
   static init(sequelize) {
 
      return super.init(
         {  // 첫번째 객체 인수는 테이블 필드에 대한 설정
            MenuNm: {
               type: Sequelize.STRING(200),
               allowNull: false
               //unique: true,
            },
            MenuType: {
               type: Sequelize.STRING(200),
               allowNull: false
            },
            CreateDate: {
               type: Sequelize.DATE,
               allowNull: false,
               defaultValue: Sequelize.NOW,
            },
            MenuPath: {
               type: Sequelize.STRING(200),
               allowNull: false
            },

         },
         {  // 두번째 객체 인수는 테이블 자체에 대한 설정
            sequelize, /* static init 메서드의 매개변수와 연결되는 옵션으로, db.sequelize 객체를 넣어야 한다. */
            timestamps: false, /* true : 각각 레코드가 생성, 수정될 때의 시간이 자동으로 입력된다. */
            underscored: false, /* 카멜 표기법을 스네이크 표기법으로 바꾸는 옵션 */
            modelName: 'sys_menu', /* 모델 이름을 설정. */
            tableName: 'sys_menus', /* 데이터베이스의 테이블 이름. */
            paranoid: false, /* true : deletedAt이라는 컬럼이 생기고 지운 시각이 기록된다. */
            charset: 'utf8', /* 인코딩 */
            collate: 'utf8_general_ci'
         }
      );
   } 
 
   // 다른 모델과의 관계
   // static associate(db) { // 인자로 index.js에서 만든 여러 테이블이 저장되어있는 db객체를 받을 것이다.
      
   //    db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id', onDelete: 'cascade', onUpdate: 'cascade' });
   //    // db.User (hasMany) db.Comment = 1:N 관계 이다.  
   //    // db.User는 가지고있다. 많이. db.Comment를
   // }
};
 
module.exports = Menu;