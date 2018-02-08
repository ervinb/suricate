/*
 * Copyright 2012-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.suricate.monitoring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Configuration extends AbstractModel<String> {

    @Id
    @Column(name = "config_key",nullable = false, unique = true)
    private String key;

    @Column(name = "config_value", nullable = false)
    private String value;

    @Column(name = "config_export")
    private boolean export;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public boolean isExport() {
        return export;
    }

    public void setExport(boolean export) {
        this.export = export;
    }

    @Override
    public String getExplicitName(){
        return key;
    }

    @Override
    public String getId() {
        return key;
    }
}
