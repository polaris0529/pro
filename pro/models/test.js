module.exports = (sequelize, DataTypes) => {
    return sequelize.define('LOGIN_USER_TB', { 
        USER_ID: {
            type: DataTypes.BIGINT(20), // BIGINT
            allowNULL: false,
            unique: true,
        },
        INSERT_DATE: {
            type: DataTypes.DATE, // DATE
            allowNULL: false,
            unique: true,
        },
    },{
        timestamps: false, // ture일 시 시퀄라이저는 createAt, updateAt 컬럼을 추가함.
    })
}