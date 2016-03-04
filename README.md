o-card [![Circle CI](https://circleci.com/gh/Financial-Times/o-card/tree/master.svg?style=svg)](https://circleci.com/gh/Financial-Times/o-card/tree/master)
=================

Origami component for a card.

## Browser support

|  Browsers  | Primary Experience | Core Experience |
|:----------:|:------------------:|:---------------:|
|   Chrome   |        35+         |       35+       |
|   Firefox  |        30+         |       30+       |
|   Safari   |        7+          |       7+        |
|   IE       |        8+          |       8+        |

Known issues:

* Image alignment is not supported in <IE9, the image will default to being full width of the card and aligned above the timestamp

## Usage

### SCSS:

Add `@import 'o-card/main';` to you main SCSS file.

### Default elements

The following elements are supported by default:

	.o-card__tag {} 					// Small coloured tag at the top of the card
	.o-card__heading {} 				// Main heading of the card
	.o-card__standfirst {} 				// A short piece of content
	.o-card__image {}       			// An image for the card (with available [alignments](#image-alignment))
	.o-card__timestamp {} 				// A styled timestamp for the card
	.o-card__related-content {} 	 	// A list of related content links
	.o-card__related-content-item {} 	// A single item of a related content list

### Silent mode ([docs](http://origami.ft.com/docs/syntax/scss/#silent-styles))

If using `o-card` in silent mode, you can customise the block class by doing:

	.my-card {
	    @include oCard;
	}

Each element class has a `@mixin` as well (e.g. `oCardTag`), however when using the `landscape` theme, the [default elements](#default-elements) persist.

## Themes

There are three themes that can modify a card:

* stand alone - adds a highlight to the bottom of the card (to be used if not grouped on the same background)
* stand out - adds a darker background to the card
* landscape - used for a wider card and allows for left and right [image alignments](#image-alignment).

## Image alignment

The image can be aligned in four ways, depending on the layout of the card. The alignment is managed by [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) so no change in the source order is required.

### Portrait card

* top: image will be the first element in the card
* bottom: image will be the last element in the card, unless the card has related content in which it will be above the related content.

### Landscape card

In a landscape card the image can be aligned `left` or `right`. In a landscape card, the heading will appear in the same row as the image, and if used a standfirst will appear below.

* left: image will appear on the left at `100px` width.
* right: image will appear on the right of the card at `50%` width of the card.

----

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
