namespace :heroku do
  task :deploy do
    system "heroku deploy:war --war server/target/std-board-0.1.0-SNAPSHOT-standalone.war --app std-board"
  end
end
