/*******************************************************************************
 * Copyright (c) 2013 Luigi Sgro. All rights reserved. This
 * program and the accompanying materials are made available under the terms of
 * the Eclipse Public License v1.0 which accompanies this distribution, and is
 * available at http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Luigi Sgro - initial API and implementation
 ******************************************************************************/
package com.pureblue.quant.model;

/**
 * Type of security
 *
 */
public enum SecurityType {
	/**
	 * Stock
	 */
	STK,
	/**
	 * Option
	 */
	OPT,
	/**
	 * Future
	 */
	FUT,
	/**
	 * Index
	 */
	IND,
	/**
	 * Free of Payment
	 */
	FOP,
	/**
	 * Cash (e.g. forex)
	 */
	CASH,
	/**
	 * Combo order
	 */
	BAG
}
