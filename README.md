o-card [![Circle CI](https://circleci.com/gh/Financial-Times/o-card/tree/master.svg?style=svg)](https://circleci.com/gh/Financial-Times/o-card/tree/master)
=================

Origami component for a card.

## Browser support

Works as expected in all browsers that require "enhanced" and "core" support.

## Usage

### SCSS:

Add `@import 'o-card/main';` to your main SCSS file.

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

* standalone - adds a highlight to the bottom of the card (to be used if not grouped on the same background)
* standout - adds a darker background to the card
* landscape - used for a wider card and allows for left and right [image alignments](#image-alignment).

## Image alignment

The image can be aligned in four ways, depending on the layout of the card. The alignment is managed by [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) so no change in the source order is required.

### Portrait card

* top: image will be the first element in the card
* bottom: image will be the last element in the card, unless the card has related content, in which case it will be above the related content.

### Landscape card

In a landscape card the image can be aligned `left` or `right`. In a landscape card, the heading will appear in the same row as the image and if used, a standfirst will appear below.

* left: image will appear on the left at `100px` width. Configured by `$o-card-image-width-left-align`.
* right: image will appear on the right of the card aligned with the top, at `50%` width of the card.

----

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
