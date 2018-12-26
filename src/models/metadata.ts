// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

// https://github.com/edcarroll/ta-json
import {
    JsonElementType,
    JsonObject,
    JsonProperty,
    OnDeserialized,
} from "ta-json-x";

import { BelongsTo } from "./metadata-belongsto";
import { Contributor } from "./metadata-contributor";
import { MediaOverlay } from "./metadata-media-overlay";
import { IStringMap } from "./metadata-multilang";
import { Properties } from "./metadata-properties";
import { Subject } from "./metadata-subject";

// export interface IMeta {
//     property: string;
//     value: string;
//     children: IMeta[];
// }

@JsonObject()
export class Metadata {
    @JsonProperty("@type")
    public RDFType!: string;

    @JsonProperty("title")
    // @JsonType(String)
    // not needed because primitive string union with
    // simple object type (string keys, string values)
    public Title!: string | IStringMap; // | string[] | IStringMap[]

    @JsonProperty("identifier")
    public Identifier!: string;

    @JsonProperty("author")
    @JsonElementType(Contributor)
    public Author!: Contributor[];

    @JsonProperty("translator")
    @JsonElementType(Contributor)
    public Translator!: Contributor[];

    @JsonProperty("editor")
    @JsonElementType(Contributor)
    public Editor!: Contributor[];

    @JsonProperty("artist")
    @JsonElementType(Contributor)
    public Artist!: Contributor[];

    @JsonProperty("illustrator")
    @JsonElementType(Contributor)
    public Illustrator!: Contributor[];

    @JsonProperty("letterer")
    @JsonElementType(Contributor)
    public Letterer!: Contributor[];

    @JsonProperty("penciler")
    @JsonElementType(Contributor)
    public Penciler!: Contributor[];

    @JsonProperty("colorist")
    @JsonElementType(Contributor)
    public Colorist!: Contributor[];

    @JsonProperty("inker")
    @JsonElementType(Contributor)
    public Inker!: Contributor[];

    @JsonProperty("narrator")
    @JsonElementType(Contributor)
    public Narrator!: Contributor[];

    @JsonProperty("contributor")
    @JsonElementType(Contributor)
    public Contributor!: Contributor[];

    @JsonProperty("publisher")
    @JsonElementType(Contributor)
    public Publisher!: Contributor[];

    @JsonProperty("imprint")
    @JsonElementType(Contributor)
    public Imprint!: Contributor[];

    @JsonProperty("language")
    @JsonElementType(String)
    public Language!: string[];

    @JsonProperty("modified")
    public Modified!: Date;

    @JsonProperty("published")
    public PublicationDate!: Date;

    @JsonProperty("description")
    public Description!: string;

    @JsonProperty("readingProgression")
    public Direction!: string;

    @JsonProperty("rendition")
    public Rendition!: Properties;

    @JsonProperty("source")
    public Source!: string;

    @JsonProperty("epub-type")
    @JsonElementType(String)
    public EpubType!: string[];

    @JsonProperty("rights")
    public Rights!: string;

    @JsonProperty("subject")
    @JsonElementType(Subject)
    public Subject!: Subject[];

    // tslint:disable-next-line:max-line-length
    // https://github.com/readium/webpub-manifest/blob/0976680e25852b8a4c4802a052ba750ab3e89284/schema/metadata.schema.json#L140
    @JsonProperty("belongsTo")
    public BelongsTo!: BelongsTo;

    @JsonProperty("duration")
    public Duration!: number;

    @JsonProperty("media-overlay")
    public MediaOverlay!: MediaOverlay;

    // public OtherMetadata: IMeta[];

    @OnDeserialized()
    // tslint:disable-next-line:no-unused-variable
    // @ts-ignore: TS6133 (is declared but its value is never read.)
    private _OnDeserialized() {
        if (!this.Title) {
            console.log("Metadata.Title is not set!");
        }
        if (!this.Identifier) {
            console.log("Metadata.Identifier is not set!");
        }
    }
}
