module.exports = (sequelize, DataTypes) => {
    return sequelize.define('INSERT_TEST_TB', { 
        INSERT_CD: {
            type: DataTypes.STRING(20), // VARCHAR
            allowNULL: false,
            unique: false,
        },
        INSERT_DATE: {
            type: DataTypes.DATE, // DATE
            allowNULL: false,
            unique: false,
        },
    },{
        timestamps: false, // ture일 시 시퀄라이저는 createAt, updateAt 컬럼을 추가함.
    })
}