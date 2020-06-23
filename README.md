# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, foreign_key: true|
|e-mail|integer|null: false, foreign_key: true|
|password|integer|null: false, foreign_key: true|
| add_index :users,  :name|

## Association
- has_many :messages 
- has_many :groups, through:users_groups
- has_many:users_groups


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group-name|integer|null: false, foreign_key: true|

## Association
- has_many :users, through:users_groups
- has_many :users_groups
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false, foreign_key: true|
|image|string|null: true, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
| add_index :messages, :body|

## Association
- belongs_to :group
- belongs_to :user

