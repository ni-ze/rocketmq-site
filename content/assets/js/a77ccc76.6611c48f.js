"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2128],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,k=p["".concat(l,".").concat(u)]||p[u]||d[u]||c;return t?o.createElement(k,a(a({ref:n},m),{},{components:t})):o.createElement(k,a({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const c={},a="RocketMQ Connect in Action 1",i={unversionedId:"connect/04RocketMQ Connect In Action1",id:"connect/04RocketMQ Connect In Action1",title:"RocketMQ Connect in Action 1",description:"MySQL Source(CDC)  -  >RocketMQ Connect  ->  MySQL Sink(JDBC)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/10-connect/04RocketMQ Connect In Action1.md",sourceDirName:"10-connect",slug:"/connect/04RocketMQ Connect In Action1",permalink:"/docs/4.x/connect/04RocketMQ Connect In Action1",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/10-connect/04RocketMQ Connect In Action1.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Connect  Quick Start",permalink:"/docs/4.x/connect/03RocketMQ Connect Quick Start"},next:{title:"RocketMQ Connect in Action 2",permalink:"/docs/4.x/connect/05RocketMQ Connect In Action2"}},l={},s=[{value:"Preparation",id:"preparation",level:2},{value:"Start RocketMQ",id:"start-rocketmq",level:3},{value:"Start Connect",id:"start-connect",level:3},{value:"Compiling Connector Plugin",id:"compiling-connector-plugin",level:4},{value:"Start Connect Runtime",id:"start-connect-runtime",level:4},{value:"MySQL image",id:"mysql-image",level:3},{value:"Test data",id:"test-data",level:3},{value:"Start Connector",id:"start-connector",level:2},{value:"Start Debezium source connector",id:"start-debezium-source-connector",level:3},{value:"Start JDBC sink connector",id:"start-jdbc-sink-connector",level:3}],m={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rocketmq-connect-in-action-1"},"RocketMQ Connect in Action 1"),(0,r.kt)("p",null,"MySQL Source(CDC)  -  >RocketMQ Connect  ->  MySQL Sink(JDBC)"),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("h3",{id:"start-rocketmq"},"Start RocketMQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,r.kt)("li",{parentName:"ol"},"64bit JDK 1.8+;"),(0,r.kt)("li",{parentName:"ol"},"Maven 3.2.x+;"),(0,r.kt)("li",{parentName:"ol"},"Start ",(0,r.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ"),";")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"tips")," : ${ROCKETMQ_HOME} locational instructions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"bin-release.zip version\uff1a/rocketmq-all-4.9.4-bin-release"),(0,r.kt)("p",{parentName:"blockquote"},"source-release.zip version\uff1a/rocketmq-all-4.9.4-source-release/distribution")),(0,r.kt)("h3",{id:"start-connect"},"Start Connect"),(0,r.kt)("h4",{id:"compiling-connector-plugin"},"Compiling Connector Plugin"),(0,r.kt)("p",null,"Debezium RocketMQ Connector"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd rocketmq-connect/connectors/rocketmq-connect-debezium/\n$ mvn clean package -Dmaven.test.skip=true\n")),(0,r.kt)("p",null,"Move the compiled Debezium MySQL RocketMQ Connector package into the Runtime loading directory. The command is as follows\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /usr/local/connector-plugins\ncp rocketmq-connect-debezium-mysql/target/rocketmq-connect-debezium-mysql-0.0.1-SNAPSHOT-jar-with-dependencies.jar /usr/local/connector-plugins\n")),(0,r.kt)("p",null,"JDBC Connector"),(0,r.kt)("p",null,"Move the compiled JDBC Connector package into the Runtime loading directory. The command is as follows\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd rocketmq-connect/connectors/rocketmq-connect-jdbc/\n$ mvn clean package -Dmaven.test.skip=true\ncp rocketmq-connect-jdbc/target/rocketmq-connect-jdbc-0.0.1-SNAPSHOT-jar-with-dependencies.jar /usr/local/connector-plugins\n\n")),(0,r.kt)("h4",{id:"start-connect-runtime"},"Start Connect Runtime"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd  rocketmq-connect\n\nmvn -Prelease-connect -DskipTests clean install -U\n\n")),(0,r.kt)("p",null,"Modify the configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"connect-standalone.conf"),", the main configuration is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n$ vim conf/connect-standalone.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'workerId=standalone-worker\nstorePathRootDir=/tmp/storeRoot\n\n## Http port for user to access REST API\nhttpPort=8082\n\n# Rocketmq namesrvAddr\nnamesrvAddr=localhost:9876\n\n# RocketMQ acl\naclEnable=false\naccessKey=rocketmq\nsecretKey=12345678\n\nautoCreateGroupEnable=false\nclusterName="DefaultCluster"\n\n# Core configuration, configure the plugin directory of the previously compiled debezium package here\n# Source or sink connector jar file dir,The default value is rocketmq-connect-sample\npluginPaths=/usr/local/connector-plugins\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n\nsh bin/connect-standalone.sh -c conf/connect-standalone.conf &\n\n")),(0,r.kt)("h3",{id:"mysql-image"},"MySQL image"),(0,r.kt)("p",null,"Use debezium's MySQL docker environment to set up the MySQL database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -it --rm --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=debezium -e MYSQL_USER=mysqluser -e MYSQL_PASSWORD=mysqlpw quay.io/debezium/example-mysql:1.9\n")),(0,r.kt)("p",null,"MySQL information"),(0,r.kt)("p",null,"Port\uff1a3306"),(0,r.kt)("p",null,"Account\uff1aroot/debezium"),(0,r.kt)("p",null,"slave:debezium/dbz"),(0,r.kt)("h3",{id:"test-data"},"Test data"),(0,r.kt)("p",null,"Log in to the database with the root/debezium account"),(0,r.kt)("p",null,"Source database table\uff1ainventory.employee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE database inventory;\n\nuse inventory;\nCREATE TABLE `employee` (\n`id` bigint NOT NULL AUTO_INCREMENT,\n`name` varchar(128) DEFAULT NULL,\n`howold` int DEFAULT NULL,\n`male` int DEFAULT NULL,\n`company` varchar(128) DEFAULT NULL,\n`money` double DEFAULT NULL,\n`begin_time` datetime DEFAULT NULL,\n`modify_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'modify time',\n`decimal_test` decimal(11,2) DEFAULT NULL COMMENT 'test decimal type',\nPRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;\n\n\n\nINSERT INTO `employee` VALUES (1, 'name-01', 24, 6, 'company', 9987, '2021-12-22 08:00:00', '2022-06-14 18:20:11', 321.11);\nINSERT INTO `employee` VALUES (2, 'name-02', 19, 7, 'company', 32232, '2021-12-29 08:00:00', '2022-06-14 18:18:47', 77.12);\nINSERT INTO `employee` VALUES (8, 'name-03', 20, 1, NULL, 0, NULL, '2022-06-14 18:26:05', 11111.00);\nINSERT INTO `employee` VALUES (9, 'name-04', 21, 1, 'company', 12345, '2021-12-24 20:44:10', '2022-06-14 18:20:02', 123.12);\nINSERT INTO `employee` VALUES (11, 'name-05', 50, 2, 'company', 33333, '2021-12-24 22:14:52', '2022-06-14 18:19:58', 123.12);\nINSERT INTO `employee` VALUES (12, 'name-06', 19, 3, NULL, 0, NULL, '2022-06-14 18:26:12', 111233.00);\nINSERT INTO `employee` VALUES (13, 'name-07', 20, 4, 'company', 3237, '2021-12-29 01:31:03', '2022-06-14 18:19:27', 52.00);\nINSERT INTO `employee` VALUES (14, 'name-08', 25, 15, 'company', 32255, '2022-02-08 19:06:39', '2022-06-14 18:18:32', 0.00);\nINSERT INTO `employee` VALUES (15, NULL, 0, 0, NULL, 0, NULL, '2022-06-14 20:13:29', NULL);\n\n\n")),(0,r.kt)("p",null,"Target database\uff1ainventory_2.employee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE database inventory_2;\nuse inventory_2;\nCREATE TABLE `employee` (\n`id` bigint NOT NULL AUTO_INCREMENT,\n`name` varchar(128) DEFAULT NULL,\n`howold` int DEFAULT NULL,\n`male` int DEFAULT NULL,\n`company` varchar(128) DEFAULT NULL,\n`money` double DEFAULT NULL,\n`begin_time` datetime DEFAULT NULL,\n`modify_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '\u4fee\u6539\u65f6\u95f4',\n`decimal_test` decimal(11,2) DEFAULT NULL COMMENT 'test decimal type',\nPRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;\n")),(0,r.kt)("h2",{id:"start-connector"},"Start Connector"),(0,r.kt)("h3",{id:"start-debezium-source-connector"},"Start Debezium source connector"),(0,r.kt)("p",null,"Synchronize original table data\uff1ainventory.employee\nPurpose: Parse MySQL binlog and encapsulate into a generic ConnectRecord object and send to RocketMQ Topic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/MySQLCDCSource -d \'{\n"connector.class": "org.apache.rocketmq.connect.debezium.mysql.DebeziumMysqlConnector",\n"max.task": "1",\n"connect.topicname": "debezium-mysql-source-topic",\n"kafka.transforms": "Unwrap",\n"kafka.transforms.Unwrap.delete.handling.mode": "none",\n"kafka.transforms.Unwrap.type": "io.debezium.transforms.ExtractNewRecordState",\n"kafka.transforms.Unwrap.add.headers": "op,source.db,source.table",\n"database.history.skip.unparseable.ddl": true,\n"database.history.name.srv.addr": "localhost:9876",\n"database.history.rocketmq.topic": "db-history-debezium-topic",\n"database.history.store.only.monitored.tables.ddl": true,\n"include.schema.changes": false,\n"database.server.name": "dbserver1",\n"database.port": 3306,\n"database.hostname": "database ip",\n"database.connectionTimeZone": "UTC",\n"database.user": "debezium",\n"database.password": "dbz",\n"table.include.list": "inventory.employee",\n"max.batch.size": 50,\n"database.include.list": "inventory",\n"snapshot.mode": "when_needed",\n"database.server.id": "184054",\n"key.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n"value.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n')),(0,r.kt)("h3",{id:"start-jdbc-sink-connector"},"Start JDBC sink connector"),(0,r.kt)("p",null,"Purpose: Consume data from the Topic and write to the destination table through the JDBC protocol."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/jdbcmysqlsinktest -d \'{\n  "connector.class": "org.apache.rocketmq.connect.jdbc.connector.JdbcSinkConnector",\n  "max.task": "2",\n  "connect.topicnames": "debezium-mysql-source",\n  "connection.url": "jdbc:mysql://database ip:3306/inventory_2",\n  "connection.user": "root",\n  "connection.password": "debezium",\n  "pk.fields": "id",\n  "table.name.from.header": "true",\n  "pk.mode": "record_key",\n  "insert.mode": "UPSERT",\n  "db.timezone": "UTC",\n  "table.types": "TABLE",\n  "errors.deadletterqueue.topic.name": "dlq-topic",\n  "errors.log.enable": "true",\n  "errors.tolerance": "ALL",\n  "delete.enabled": "true",\n  "key.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n  "value.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n')),(0,r.kt)("p",null,"After the above two Connector tasks are successfully created, log in to the database with the root/debezium account."),(0,r.kt)("p",null,"Insert, delete or update data to the source database table: inventory.employee, then the data will be synchronized to the destination table inventory_2.employee."))}d.isMDXComponent=!0}}]);