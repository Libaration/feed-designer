# feed-designer
Feed Designer scrapes an external website for Instagram information using Nokogiri and adds scraped photos/user info to Rails database.
Rails backend serves database information as an API to the front end to display a organized instagram feed for user to plan their instagram posts.
Photos can be drag/dropped and arranged to preview how a users feed will look before posting to instagram directly.
This allows users/influencers to pre-plan their instagram feed for a more cohesive page design/theme.


https://user-images.githubusercontent.com/11550216/120419398-5eb99800-c330-11eb-8967-f0e261138b4d.mp4




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
