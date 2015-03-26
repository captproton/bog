# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard :minitest do
  # with Minitest::Unit
  # watch(%r{^test/(.*)\/?test_(.*)\.rb$})
  # watch(%r{^lib/(.*/)?([^/]+)\.rb$})     { |m| "test/#{m[1]}test_#{m[2]}.rb" }
  # watch(%r{^test/test_helper\.rb$})      { 'test' }

  # with Minitest::Spec
  watch(%r{^spec/(.*)_spec\.rb$})
  watch(%r{^lib/(.+)\.rb$})         { |m| "spec/#{m[1]}_spec.rb" }
  watch(%r{^spec/spec_helper\.rb$}) { 'spec' }

  # Rails 4
  watch(%r{^app/(.+)\.rb$})                               { |m| "spec/#{m[1]}_test.rb" }
  watch(%r{^app/controllers/application_controller\.rb$}) { 'spec/controllers' }
  watch(%r{^app/controllers/(.+)_controller\.rb$})        { |m| "spec/integration/#{m[1]}_spec.rb" }
  watch(%r{^app/views/(.+)_mailer/.+})                   { |m| "spec/mailers/#{m[1]}_mailer_spec.rb" }
  watch(%r{^lib/(.+)\.rb$})                               { |m| "spec/lib/#{m[1]}_spec.rb" }
  watch(%r{^spec/.+_spec\.rb$})
  watch(%r{^spec/spec_helper\.rb$}) { 'test' }

  # Rails < 4
  # watch(%r{^app/controllers/(.*)\.rb$}) { |m| "test/functional/#{m[1]}_test.rb" }
  # watch(%r{^app/helpers/(.*)\.rb$})     { |m| "test/helpers/#{m[1]}_test.rb" }
  # watch(%r{^app/models/(.*)\.rb$})      { |m| "test/unit/#{m[1]}_test.rb" }
end

# guard :passenger do ## bug in current code for this gem
#   # watch(%|lib/.*\.rb|)
#   watch(%r{^lib/.*\.rb$})
#   watch(%r{^config/.*\.rb$})
#   # watch(%|config/.*\.rb|)
# end

guard :bundler do
  watch('Gemfile')
  # Uncomment next line if your Gemfile contains the `gemspec' command.
  # watch(/^.+\.gemspec/)
end
