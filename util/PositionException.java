/*******************************************************************************
 * Copyright (c) 2013 Luigi Sgro. All rights reserved. This
 * program and the accompanying materials are made available under the terms of
 * the Eclipse Public License v1.0 which accompanies this distribution, and is
 * available at http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Luigi Sgro - initial API and implementation
 ******************************************************************************/
package util;

public class PositionException extends RequestFailedException {
	private static final long serialVersionUID = 1L;
	public PositionException() {
		super();
	}
	public PositionException(String message) {
		super(message);
	}
	public PositionException(String message, Throwable e) {
		super(message, e);
	}
}
