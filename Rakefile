APP_NAME="std-board"

namespace :build do
  task :client do
    Dir.chdir(File.expand_path("client", __dir__)) do
      system "lein cljsbuild once"
    end
  end

  task :server => :client do
    Dir.chdir(File.expand_path("server", __dir__)) do
      system "lein ring uberwar"
    end
  end
end

namespace :heroku do
  uberwar_path = File.expand_path("server/target/std-board-0.1.0-SNAPSHOT-standalone.war", __dir__)
  task :deploy => ["build:server"] do
    system "heroku deploy:war --war #{uberwar_path} --app #{APP_NAME}"
  end
end
