-- create database if not exists library default character set utf8mb4 collate utf8mb4_general_ci;
-- use library;

CREATE TABLE IF NOT EXISTS TBL_USER (
    ID VARCHAR(256) NOT NULL COMMENT '用户主键',
    USER_NAME VARCHAR(256) NOT NULL COMMENT '用户名',
    NAME VARCHAR(256) NOT NULL COMMENT '姓名',
    PASSWORD VARCHAR(256) NOT NULL COMMENT '密码',
    SEX VARCHAR(3) NOT NULL COMMENT '性别',
    ID_CARD VARCHAR(256) NOT NULL COMMENT '身份证号码',
    MOBILE VARCHAR(15) NOT NULL COMMENT '移动手机',
    EMAIL VARCHAR(256) NOT NULL COMMENT '邮箱',
    RID INT(5) COMMENT '角色ID',
    FAILURES INT(1) DEFAULT 0 COMMENT '失败次数',
    LOCK_TIME TIMESTAMP COMMENT '锁定时间',
    PRIMARY KEY(ID)
) ENGINE=InnoDB COLLATE utf8mb4_general_ci;

ALTER TABLE TBL_USER ADD INDEX TBL_USER_INDEX_USER_NAME_INDEX(USER_NAME);
ALTER TABLE TBL_USER ADD INDEX TBL_USER_INDEX_MOBILE(MOBILE);