# feed-designer
Feed Designer scrapes an external website for Instagram information using Nokogiri and adds scraped photos/user info to Rails database.
Rails backend serves database information as an API to the front end to display a organized instagram feed for user to plan their instagram posts.

![img](https://i.gyazo.com/7fed806995f913fa3d3e2ceaeb5fd1f6.mp4https://)


##### Prerequisites

The setups steps expect following tools installed on the system.

- Github
- Ruby 2.6.1
- Rails Rails 6.0.3.4

##### 1. Check out the repository

```bash
git clone git@github.com:Libaration/feed-designer.git
```

##### 2. Create and setup the database

Run the following commands to create and setup the database.

```ruby
bundle exec rake db:create
bundle exec rake db:setup
```

##### 3. Start the Rails server

You can start the rails server using the command given below.

```ruby
bundle exec rails s
```

And now you can visit the API via an endpoint with the base URL being http://localhost:3000
Endpoints : /users
Open index.html from the frontend folder to view the front end design.
