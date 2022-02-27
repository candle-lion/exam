# 1. 证书配置
##  1.1 证书生成
进入%JAVVA_HOME%\bin目录下,执行如下命令：  
参数说明：  
genkey 表示要创建一个新的密钥。  
alias 表示 keystore 的别名。  
keyalg 表示使用的加密算法是 RSA ，一种非对称加密算法。  
keysize 表示密钥的长度。  
keystore 表示生成的密钥存放位置。  
validity 表示密钥的有效时间，单位为天  
-keystore 生成秘钥库的存储路径和名称  
-keypass 秘钥口令  
-storepass 秘钥库口令  
-dname 拥有者信息，CN：姓名；OU：组织单位名称；O：组织名称；L：省/市/自治区名称；C：国家/地区代码
```batch
keytool -genkey -alias library -keyalg RSA -keysize 2048 -keystore D:\library.p12 -keypass xxxx -storepass xxxx -validity 365 -dname "CN=library,OU=sun,O=library,L=xian,ST=shanxi,C=CN"
keytool -importkeystore -srckeystore D:\library.p12 -destkeystore D:\library.p12 -deststoretype pkcs12
```
## 1.2 项目配置：
\# 密钥文件名  
server.ssl.key-store=classpath:library.p12  
\# 密钥别名  
server.ssl.key-alias=library  
\# cmd命令执行过程中输入的密码  
server.ssl.key-store-password=xxxx

## 1.3 默认账号密码
账号: admin
密码: public