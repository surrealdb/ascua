# Copyright © 2016 Abcum Ltd
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

default:
	@echo "Choose a Makefile target:"
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print "  - " $$1}}' | sort

.PHONY: clean
clean:
	@echo "Clean..."
	find packages -mindepth 2 -maxdepth 2 -type d -name 'tmp' -exec rm -rf "{}" \;
	rm -rf node_modules
	npx lerna@4.0.0 clean --yes

.PHONY: setup
setup:
	@echo "Setup..."
	npm install

.PHONY: serve
serve:
	@echo "Serve..."
	FASTBOOT_DISABLED=true ember serve

.PHONY: version
version:
	@echo "Version..."
	npx lerna@4.0.0 version --no-push --force-publish

.PHONY: publish
publish:
	@echo "Publish..."
	npx lerna@4.0.0 publish from-package

.PHONY: deploy
deploy:
	@echo "Deploy..."
	rm -rf /tmp/ascua-deploy
	ember deploy production
